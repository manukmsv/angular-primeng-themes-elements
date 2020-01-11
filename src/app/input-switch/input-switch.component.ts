import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-input-switch",
  templateUrl: "./input-switch.component.html",
  styleUrls: ["./input-switch.component.css"]
})
export class InputSwitchComponent implements OnInit {
  checked1: boolean = false;
  checked2: boolean = true;

  constructor() {}

  ngOnInit() {}
}
