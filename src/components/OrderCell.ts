import {Component, OnInit, Input} from '@angular/core';
import {Store} from '@ngrx/store';

interface AppState {
}

@Component({
  selector: 'OrderCell',
  templateUrl: './OrderCell.html',
  styleUrls: ['../assets/css/style_orderCell.css']
})

export class OrderCell implements OnInit {
  @Input() orderActive: boolean = false


  constructor(private store: Store<AppState>) {
  }

  orderClick() {
    // 禁止连续点击
    if (this.store['source']['value']['maskLock']) return
    let action = {type: 'setMaskLock', value: true}
    this.store.dispatch(action)

    this.orderActive = !this.orderActive
    let mask = this.store['source']['value']['mask']
    mask.msg = this.orderActive ? '已添加订阅' : '已取消订阅'
    mask.toggleActive()
  }

  ngOnInit() {
    // console.log(this.orderActive)
  }
}
