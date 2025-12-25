import { Component, OnInit } from '@angular/core';
import { Fieldset } from 'primeng/fieldset';

@Component({
  selector: 'app-panel-fieldset',
  standalone: true,
  imports: [Fieldset],
  templateUrl: './panel-fieldset.component.html',
  styleUrls: ['./panel-fieldset.component.css']
})
export class PanelFieldsetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onBeforeToggleFunc(event: any) {
    console.log('onBeforeToggle', event);
  }

  onAfterToggleFunc(event: any) {
    console.log('onAfterToggle', event);
  }

}