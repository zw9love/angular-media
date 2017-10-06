import {Component, OnInit, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import $ from 'jquery'

interface AppState {
}

@Component({
  selector: 'Shadow',
  templateUrl: './Shadow.html'
})

export class Shadow implements OnInit {
  @Input() title: string
  @Input() deleteActive: boolean
  @Input() parent: object
  @Input() fn = function () {
  }
  shadowActive = false
  shadow: object
  shadowStyle: {}

  constructor(private store: Store<AppState>) {
    this.shadow = store.select('shadow');
  }

  cancel() {
    this.shadowActive = false
  }

  sure() {
    this.shadowActive = false
    if (this.fn) {
      this.fn()
    }
    // 这里就是喜欢不用store来做
    if (this.parent) {
      this.parent['sureDelete']()
    }
  }

  ngOnInit() {
    this.shadowStyle = {width: '600px', height: $(window).height() + 'px'}
    let action = {type: 'setShadow', value: this}
    this.store.dispatch(action)
    // console.log(this.store['source']['value'])
  }
}
