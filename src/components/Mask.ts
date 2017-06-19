import {Component, OnInit, Input} from '@angular/core';
import {Store} from '@ngrx/store';

interface AppState {}

@Component({
  selector: 'Mask',
  template: `<div class="mask"  [ngStyle]="maskStyle">
                <div class="mask-text">{{msg}}</div>
              </div>`
})

export class Mask {
  maskStyle:object = {display:'none'}
  timer = null
  msg = ''
  mask = {}

  constructor(private store: Store<AppState>) {
    this.mask = store.select('mask')
  }

  toggleActive(){
    this.maskStyle = {zIndex:1,backgroundColor:'rgba(0,0,0,.5)'}
    clearTimeout(this.timer)
    this.timer = setTimeout(()=>{
      this.maskStyle = {display:'none'}
      let action ={type: 'setMaskLock',value:false}
      this.store.dispatch(action)
    },1000)
  }

  ngOnInit() {
    let action ={type: 'setMask',value:this}
    this.store.dispatch(action)
  }
}

