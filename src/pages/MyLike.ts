import {Component, OnInit, Input} from '@angular/core';
import Mock from 'mockjs'
import $ from 'jquery'
import {myScroll, unScroll} from '../tool/Scroll'

@Component({
  selector: 'MyLike',
  templateUrl: 'MyLike.html',
  // 自动隔开作用域 相当于vue里面的scoped
  styleUrls: ['../assets/css/style_edit.css']
})

export class MyLike {
  title = '我的收藏'
  editActive = true
  mainData = []
  lock = false

  // 模拟数据（瀑布流）
  getData() {
    let data = Mock.mock({
      'list|10': [{
        'title': '@ctitle(6,100)',
        'author': '@cword(2,8)',
        'msg_num|0-999': 0,
        'eye_num|0-999': 0,
        'isMovie': '@boolean',
      }],
    }).list

    this.mainData = this.mainData.concat(data)

    // console.log(this.mainData)
    // 输出结果
    // console.log(JSON.stringify(this.mainData, null, 4))

    this.lock = false

  }

  ngOnInit(){
    this.getData()
    myScroll($, this, 100)
  }

  //  当组件销毁的时候
  ngOnDestroy(){
    unScroll($)
  }
}
