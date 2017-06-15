import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'MyOrder',
  templateUrl: './MyOrder.component.html',
  // 自动隔开作用域 相当于vue里面的scoped
})

export class MyOrder {
  title = '我的订阅'
}
