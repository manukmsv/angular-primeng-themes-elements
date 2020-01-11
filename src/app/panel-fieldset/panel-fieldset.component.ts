import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-fieldset',
  templateUrl: './panel-fieldset.component.html',
  styleUrls: ['./panel-fieldset.component.css']
})
export class PanelFieldsetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onBeforeToggleFunc() {
    console.log('onBeforeToggle');
  }

  onAfterToggleFunc() {
    console.log('onAfterToggle');
  }

}