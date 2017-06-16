import {Component, OnInit, Input} from '@angular/core';
import Mock from 'mockjs'
import $ from 'jquery'
import {myScroll, unScroll} from '../tool/Scroll'

@Component({
  selector: 'MyOrder',
  templateUrl: 'MyOrder.html',
  // 自动隔开作用域 相当于vue里面的scoped
  styleUrls: ['../assets/css/style_orderlist.css','../assets/css/style_order.css']
})

export class MyOrder {
  title = '我的订阅'
  mainData = []
  lock = false

  getData(){
    let data = Mock.mock({
      'list|10': [{
        'src':'../assets/img/orderlogo.png',
        'title':'@ctitle(6,50)',
        'num|0-99': 0,
        'author': '@cword(2,8)',
        'time':'@time("HH:mm")'
      }],
    }).list

    this.mainData = this.mainData.concat(data)

    // 输出结果
    // console.log(JSON.stringify(this.mainData, null, 4))

    this.lock = false
  }

  ngOnInit(){
    this.getData()
    myScroll($, this, 100)
    // console.log(this)
  }

  //  当组件销毁的时候
  ngOnDestroy(){
    unScroll($)
  }
}
