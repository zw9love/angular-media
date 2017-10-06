import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from '@ngrx/store';
import Mock from 'mockjs'
import $ from 'jquery'
import {myScroll, unScroll} from '../tool/Scroll'

interface AppState {

}

@Component({
  selector: 'MyOrder',
  templateUrl: 'MyOrder.html',
  // 自动隔开作用域 相当于vue里面的scoped
  styleUrls: ['../assets/css/style_orderlist.css', '../assets/css/style_order.css']
})

export class MyOrder {
  title = '我的订阅'
  mainData = []
  lock = false

  orderShow: object

  constructor(public route: ActivatedRoute, private router: Router, private store: Store<AppState>) {
    // this.orderShow = store.select('show');
  }

  // 去订阅号详情
  goOrderShow(data) {
    let action = {type: 'setOrderShow', value: data}
    this.store.dispatch(action)
    this.router.navigate(['orderShow', data.id])
  }

  // 去订阅号列表
  goSubscribe() {
    this.router.navigate(['subscribe'])
  }

  // （瀑布流）
  getData() {
    let data = Mock.mock({
      'list|10': [{
        'id': '@id',
        'title': '@ctitle(6,150)',
        'author': '@cword(2,8)',
        'isOrder': '@boolean',
        'src': '../assets/img/order.png',
        'time': '@time("HH:mm")',
        'num|0-99': 0,
      }],
    }).list

    this.mainData = this.mainData.concat(data)

    // 输出结果
    // console.log(JSON.stringify(this.mainData, null, 4))

    this.lock = false
  }

  ngOnInit() {
    this.getData()
    myScroll($, this, 100)
    // console.log(this)
  }

  //  当组件销毁的时候
  ngOnDestroy() {
    unScroll($)
  }
}
