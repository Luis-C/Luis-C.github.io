import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { JSDOM } from 'jsdom';
import ts from 'typescript';

export const originalSource = resolve('../luis-hernandez/src');
export const browserOutput = resolve('dist/luis-hernandez-v22/browser');
export const normalize = (text: string | null) => (text ?? '').replace(/\s+/g, ' ').trim();

export function originalDocument(path: string): Document {
  return new JSDOM(readFileSync(resolve(originalSource, 'app', path), 'utf8')).window.document;
}

export function originalCards(page: string) {
  return Array.from(
    originalDocument(`pages/${page}/${page}.component.html`).querySelectorAll('mat-card'),
  );
}

function literal(node: ts.Expression): string {
  if (ts.isStringLiteral(node)) return node.text;
  if (ts.isBinaryExpression(node) && node.operatorToken.kind === ts.SyntaxKind.PlusToken) {
    return literal(node.left) + literal(node.right);
  }
  throw new Error(`Unsupported baseline expression: ${node.getText()}`);
}

export function originalList(name: string): Record<string, string>[] {
  const file = ts.createSourceFile(
    'home.ts',
    readFileSync(resolve(originalSource, 'app/pages/home/home.component.ts'), 'utf8'),
    ts.ScriptTarget.Latest,
    true,
  );
  const home = file.statements.find(ts.isClassDeclaration);
  const property = home?.members.find(
    (member): member is ts.PropertyDeclaration =>
      ts.isPropertyDeclaration(member) && member.name.getText(file) === name,
  );
  if (!property?.initializer || !ts.isArrayLiteralExpression(property.initializer)) {
    throw new Error(`Missing original home list: ${name}`);
  }
  return property.initializer.elements.map((element) => {
    if (!ts.isObjectLiteralExpression(element)) throw new Error('Expected baseline object');
    return Object.fromEntries(
      element.properties.map((field) => {
        if (!ts.isPropertyAssignment(field)) throw new Error('Expected baseline property');
        return [field.name.getText(file), literal(field.initializer)];
      }),
    );
  });
}
