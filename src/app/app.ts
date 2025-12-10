import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartCard } from './start-card/start-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StartCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('impostor');
}
