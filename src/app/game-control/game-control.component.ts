import { Component, OnInit, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  gameCounter: number;
  gameStarted: boolean;

  @Output()
  newEvent = new EventEmitter<number>();

  @Output()
  cleanGame = new EventEmitter<void>();

  private timerId;

  constructor() {
    this.gameCounter = 0
  }

  ngOnInit() {
  }

  startGame(): void {
    if ( !this.gameStarted ) {
      console.log( 'Game start' );
      this.timerId = setInterval( () => {
        console.log( 'GameEvent:' + this.gameCounter );
        this.newEvent.emit( this.gameCounter );
        this.gameCounter += 1;
      }, 1000 );

      this.gameStarted = true;
    }
    else {
      console.log( 'Game already started' );
    }
  }

  stopGame(): void {
    clearInterval ( this.timerId );
    this.gameStarted = false;
    this.gameCounter = 0;
    console.log( 'Game was stop with counter number ' + this.gameCounter )
  }

  clearGame(): void {
    this.cleanGame.emit();
  }

}
