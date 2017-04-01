import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Board that stores all the numbers generated
  board: Array<number>;

  constructor() {
    this.board = Array<number>();
  }

  // Public method to add new numbers to the board
  addNumber(number: number): void {
    this.board.push(number);
  }

  // Clean all the numbers that are currently in the board
  cleanGame(): void {
    this.board = Array<number>();
  }

}
