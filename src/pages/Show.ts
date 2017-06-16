import {Component, OnInit, Input} from '@angular/core';
import Mock from 'mockjs'
import $ from 'jquery'
import {myScroll, unScroll} from '../tool/Scroll'

@Component({
  selector: 'Show',
  templateUrl: 'Show.html',
  // 自动隔开作用域 相当于vue里面的scoped
  styleUrls: ['../assets/css/style_show.css','../assets/css/style_order.css']
})

export class Show {
  title = '我的评论'
  editActive = true
  recommendData = []
  commentData = []

  // 获取推荐块数据
  getRecommendData(){
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

  // 获取评论块数据
  getCommentData(){
    let data = Mock.mock({
      'list|4': [{

        'title': '@ctitle(6,100)',
        'author': '@cword(2,8)',
        'msg_num|0-999': 0,
        'eye_num|0-999': 0,
        'isMovie': '@boolean',
      }],
    }).list

    this.commentData = this.commentData.concat(data)
  }

  // 组件数据加载完毕
  ngOnInit(){
    this.getRecommendData()
  }
}
