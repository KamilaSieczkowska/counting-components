import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons-component',
  templateUrl: './buttons-component.component.html',
  styleUrls: ['./buttons-component.component.css']
})
export class ButtonsComponentComponent implements OnInit {

  update: number = Math.floor(Math.random() * 100);

  @Output() 
  updateEvent = new EventEmitter<number>();

  constructor() { }

  increaseResult() {
    this.update++;
    this.updateEvent.emit(this.update)
  }

  decreaseResult() {
    this.update--;
    this.updateEvent.emit(this.update)
  }

  ngOnInit() {
  }

}
