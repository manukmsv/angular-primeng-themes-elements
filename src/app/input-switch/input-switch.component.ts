import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ToggleSwitch } from "primeng/toggleswitch";

@Component({
  selector: "app-input-switch",
  standalone: true,
  imports: [FormsModule, ToggleSwitch],
  templateUrl: "./input-switch.component.html",
  styleUrls: ["./input-switch.component.css"]
})
export class InputSwitchComponent implements OnInit {
  checked1: boolean = false;
  checked2: boolean = true;

  constructor() {}

  ngOnInit() {}
}
