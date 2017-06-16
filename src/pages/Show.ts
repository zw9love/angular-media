import {Component, OnInit, Input} from '@angular/core';
import Mock from 'mockjs'
import $ from 'jquery'
import {myScroll, unScroll} from '../tool/Scroll'

@Component({
  selector: 'Show',
  templateUrl: 'Show.html',
  // 自动隔开作用域 相当于vue里面的scoped
  styleUrls: ['../assets/css/style_show.css', '../assets/css/style_order.css']
})

export class Show {
  lock = false
  recommendData = []
  mainData = []

  // 获取推荐块数据
  getRecommendData() {
    this.recommendData = Mock.mock({
      'list|4': [{
        'title': '@ctitle(6,100)',
        'author': '@cword(2,8)',
        'msg_num|0-999': 0,
        'eye_num|0-999': 0,
        'isMovie': '@boolean',
      }],
    }).list
  }

  // 获取评论块数据（瀑布流）
  getData() {
    let data = Mock.mock({
      'list|5': [{
        'title': '@ctitle(5,100)',
        'author': '@cword(2,8)',
        'msg_num|0-999': 0,
        'like_num|0-999': 0,
        'time|': '@integer(1, 24)' + '小时之前',
        // 评论的条数
        'data|0-20': [{
          'name1': '@cname(0,4)',
          'name2': '@cname(0,4)',
          'info': '@ctitle(5,50)'
        }]
      }],
    }).list

    this.mainData = this.mainData.concat(data)

    this.lock = false

    // console.log(JSON.stringify(this.commentData, null, 4))
  }

  // 组件数据加载完毕
  ngOnInit() {
    this.getRecommendData()
    this.getData()
    myScroll($, this, 30)
  }

  // 当组件销毁的时候
  ngOnDestroy(){
    unScroll($)
  }
}