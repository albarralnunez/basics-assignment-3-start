import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numbersList: Array<number>;

  constructor() {
    this.numbersList = Array<number>();
  }

  addNumber(number: number): void {
    this.numbersList.push(number);
  }

  cleanGame(): void {
    this.numbersList = Array<number>();
  }

}
