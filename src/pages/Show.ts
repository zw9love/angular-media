import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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
  showData = []

  constructor(public route: ActivatedRoute, private router: Router) {

  }

  // 获取推荐块数据
  getRecommendData() {
    this.recommendData = Mock.mock({
      'list|4': [{
        'title': '@ctitle(6,100)',
        'author': '@cword(2,8)',
        'msg_num|0-999': 0,
        'eye_num|0-999': 0,
        'isMovie': '@boolean',
        'id':'@id'
      }],
    }).list
  }

  // 获取每个页面的showData
  getShowData(){
    this.showData = Mock.mock({
        'title': '@ctitle(6,30)',
        'author': '@cword(2,8)',
        'isMovie': '@boolean',
        'isOrder': '@boolean',
        'time':'@datetime("yyyy-MM-dd")',
        'src':'../assets/img/order.png',
        'infoData|1-5':[{
          'info':'@cparagraph()',
          'src':'../assets/img/show_'+ '@integer(1, 3)' +'.jpg'
        }]
    })

    // console.log(JSON.stringify(this.showData, null, 4))
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
    this.getShowData()
    myScroll($, this, 30)
    // 每次组件加载完成，回到顶部
    $(window).scrollTop(0)
    console.log(this['providers'])
  }

  // 当组件销毁的时候
  ngOnDestroy(){
    unScroll($)
  }
}
