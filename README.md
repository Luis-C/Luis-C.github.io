# [Personal Website](https://luis-c.github.io)

This is the repository for my personal website which is currently built in
Angular.

## Update Process:

```Powershell
ng b --prod --outputPath=../docs/ --baseHref="https://luis-c.github.io/"
```

- Extract Contents from docs folder into 'root' directory
- Copy index.html and rename it 404.html (This prevents 404 error on refresh)

# Notes:

- Github Pages doesn't seem to give the option to deploy from /docs for a
  personal website. (?) 
