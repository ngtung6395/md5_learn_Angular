import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-angular';

  isCountDown='Chua ket thuc';

  finnishCha(){
    this.isCountDown = 'Ket thuc';
  }
}
