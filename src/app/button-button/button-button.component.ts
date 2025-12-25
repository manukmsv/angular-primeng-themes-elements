import { Component, OnInit } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-button-button',
  standalone: true,
  imports: [Button],
  templateUrl: './button-button.component.html',
  styleUrls: ['./button-button.component.css']
})
export class ButtonButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}