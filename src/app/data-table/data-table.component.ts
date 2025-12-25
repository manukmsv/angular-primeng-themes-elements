import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-data-table",
  standalone: true,
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.css"]
})
export class DataTableComponent implements OnInit {
  //cars: Car[];

  //constructor(private carService: CarService) {}

  ngOnInit() {
   // this.carService.getCarsSmall().then(cars => (this.cars = cars));
  }
}
