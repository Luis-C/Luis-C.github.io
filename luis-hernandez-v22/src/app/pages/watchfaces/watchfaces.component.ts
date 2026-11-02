import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { watchfaces } from './watchfaces';

@Component({
  selector: 'app-watchfaces',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './watchfaces.component.html',
  styleUrl: './watchfaces.component.scss',
})
export class WatchfacesComponent {
  readonly watchfaces = watchfaces;
}
