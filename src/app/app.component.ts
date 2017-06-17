import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<hero-form></hero-form>',
  // styleUrls: ['../assets/css/globalClass.css']
})
export class AppComponent {

  ngOnInit(){
    console.log(this)
  }
}
