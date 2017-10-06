import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from '@ngrx/store';
import Mock from 'mockjs'
import $ from 'jquery'
import {myScroll, unScroll} from '../tool/Scroll'

interface AppState {

}

@Component({
  selector: 'Subscribe',
  templateUrl: './Subscribe.html',
  // template: '<hero-form></hero-form>',
  styleUrls: ['../assets/css/style_subscribe.css', '../assets/css/style_order.css']
})

export class Subscribe {
  specialStyle = {width: 'calc(100% - 85px - 5.5rem)'}
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

    // console.log(this.mainData)
    // 输出结果
    // console.log(JSON.stringify(this.mainData, null, 4))

    this.lock = false

  }

  ngOnInit() {
    this.getData()
    myScroll($, this, 100)
  }

  ngOnDestroy() {
    unScroll($)
  }

}
