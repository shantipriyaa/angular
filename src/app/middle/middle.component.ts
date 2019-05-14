import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit {
  // allways declare variables here
  public items: any = [];
  public value: string = '';

  // then constructors
  constructor() { }

  // then initialise
  ngOnInit() {
  }

  // then function defination
  add(value) {
    this.items.push(value);
    this.value = null;
  }

  remove() {
    if (this.items.length >= 0)
      this.items.pop();


  }




}
