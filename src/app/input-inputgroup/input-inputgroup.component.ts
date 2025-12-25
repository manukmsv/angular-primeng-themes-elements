import { Component, OnInit } from '@angular/core';
import { InputText } from 'primeng/inputtext';
import { Checkbox } from 'primeng/checkbox';
import { RadioButton } from 'primeng/radiobutton';

@Component({
  selector: 'app-input-inputgroup',
  standalone: true,
  imports: [InputText, Checkbox, RadioButton],
  templateUrl: './input-inputgroup.component.html',
  styleUrls: ['./input-inputgroup.component.css']
})
export class InputInputgroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}