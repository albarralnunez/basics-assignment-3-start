import { Component, OnInit, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  // Counter for the current event iteration
  gameCounter: number;
  // Indicates if the game is already started
  gameStarted: boolean;

  // Send a event with the current iteration of the gameCounter
  @Output()
  newEvent = new EventEmitter<number>();

  // Send and event to clean the board at app component
  @Output()
  cleanGame = new EventEmitter<void>();

  // Id of the event loop.
  private timerId;

  // Set the gameCounter to 0 when instantiate the component.
  constructor() {
    this.gameCounter = 0
  }

  ngOnInit() {
  }

  // Method triggered by the start button. Stars the game loop.
  startGame(): void {
    // Only allows to start the event loop if there is not other one
    if ( !this.gameStarted ) {
      console.log( 'Game start' );
      this.timerId = setInterval( () => {
        console.log( 'GameEvent:' + this.gameCounter );
        // Every iteration of the event loop send a event to be catch by other components
        this.newEvent.emit( this.gameCounter );
        // Add one to the gameCounter
        this.gameCounter += 1;
      }, 1000 );
      // Set gameStarted to protect start to event loops
      this.gameStarted = true;
    }
    else {
      console.log( 'Game already started' );
    }
  }

  // Stop the event loop, set counter to zero again and set gameStarted to False to be able to
  // start a new game
  stopGame(): void {
    clearInterval ( this.timerId );
    this.gameStarted = false;
    this.gameCounter = 0;
    console.log( 'Game was stop with counter number ' + this.gameCounter )
  }

  // Just send a event to make component app able to catch it and clean the board.
  clearGame(): void {
    this.cleanGame.emit();
  }

}
