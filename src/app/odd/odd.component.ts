import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  // Input to print the value in the template
  @Input()
  number: number;

  constructor() { }

  ngOnInit() {
  }

}
