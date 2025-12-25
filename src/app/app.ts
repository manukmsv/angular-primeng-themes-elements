import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonButtonComponent } from './button-button/button-button.component';
import { InputSwitchComponent } from './input-switch/input-switch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputSwitchComponent, ButtonButtonComponent],
  template: `
    <h1>Hello, {{ title() }}</h1>
    <app-button-button></app-button-button>
    <app-input-switch></app-input-switch>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-primeng-themes-elements');
}
