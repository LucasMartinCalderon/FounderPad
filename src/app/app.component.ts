import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'founderpad-interface';
  opened = true;


  toggle() {
    this.opened = !this.opened;
  }
}
