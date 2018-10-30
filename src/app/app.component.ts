import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ButtonsComponentComponent } from './buttons-component/buttons-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(ButtonsComponentComponent) child;

  result:number;

  ngAfterViewInit(){
    this.result = this.child.update;
  }
  
  receiveUpdate($event) {
    this.result = $event;
  }

  constructor() {

  }

  ngOnInit() {
    this.result = this.child.update;
  }
}
