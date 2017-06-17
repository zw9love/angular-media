import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { INCREMENT, DECREMENT, RESET } from './counter';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<hero-form></hero-form>',
  // styleUrls: ['../assets/css/globalClass.css']
})
export class AppComponent {

  // ngOnInit(){
  //   console.log(this)
  // }

  counter: Observable<number>;

  constructor(private store: Store<AppState>){
    this.counter = store.select('counter');
  }

  increment(){
    this.store.dispatch({ type: INCREMENT });
    console.log(this.store['source']['value'])
  }

  decrement(){
    this.store.dispatch({ type: DECREMENT });
    console.log(this.store['source']['value'])
  }

  reset(){
    this.store.dispatch({ type: RESET });
  }
}
