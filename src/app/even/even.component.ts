import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  // Input to print the value in the template
  @Input()
  number: number;

  constructor() { }

  ngOnInit() {
  }

}
