import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonButtonComponent } from './button-button/button-button.component';
import { InputSwitchComponent } from './input-switch/input-switch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputSwitchComponent, ButtonButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-primeng-themes-elements');
}
