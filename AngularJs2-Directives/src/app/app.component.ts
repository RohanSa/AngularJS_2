import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display: boolean;
  names= [{name : 'ABC'}, {name : 'DEF'}, {name : 'GHI'}];

 constructor() {
    this.display = false;
  }

  hideOrShow() {
    console.log('Dispaly value is ', this.display);
    this.display = !this.display;
  }
}
