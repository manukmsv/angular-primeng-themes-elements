import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-input-checkbox",
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
