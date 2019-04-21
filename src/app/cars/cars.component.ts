import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '.app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class CarsComponent {
  cars: {name: string, year: number}[] = [
  {
    name: 'Mazda',
    year: 2010
  },
  {
    name: 'Audi',
    year: 2005
  },
  {
    name: 'BMW',
    year: 2015
  }
];
  constructor() {
  }
  updateCarList(car: {name: string, year: number}) {
    this.cars.push(car);
  }
}
