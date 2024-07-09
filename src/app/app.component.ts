import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cetosoft';

  onTextClicked() {
    console.log("The event clicked: ");
  }
}
