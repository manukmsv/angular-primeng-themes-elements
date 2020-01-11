import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Car } from "app/data-table/car";


@Injectable()
export class CarServiceService {
  constructor(private http: HttpClient) {}

  getCarsSmall() {
    return this.http
      .get("/showcase/resources/data/cars-small.json")
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => {
        return data;
      });
  }
}
