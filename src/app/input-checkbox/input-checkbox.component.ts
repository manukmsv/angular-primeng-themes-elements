import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Checkbox } from "primeng/checkbox";

@Component({
  selector: "app-input-checkbox",
  standalone: true,
  imports: [CommonModule, FormsModule, Checkbox],
  templateUrl: "./input-checkbox.component.html",
  styleUrls: ["./input-checkbox.component.css"]
})
export class InputCheckboxComponent implements OnInit {
  selectedCities: string[] = [];
  selectedCategories: string[] = ["Technology", "Sports"];
  checked: boolean = false;

  constructor() {}

  ngOnInit() {}
}
