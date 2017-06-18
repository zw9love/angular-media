import {Component, OnInit, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import Mock from 'mockjs'
import $ from 'jquery'
import {myScroll, unScroll} from '../tool/Scroll'

interface AppState {}

@Component({
  selector: 'MyComment',
  templateUrl: 'MyComment.html',
  // 自动隔开作用域 相当于vue里面的scoped
  styleUrls: ['../assets/css/style_edit.css']
})

export class MyComment {
  title = '我的评论'
  titleEdit = true
  editActive = false
  mainData = []
  lock = false
  shadowActive = false
  index = 0
  quitTitle = '是否删除这条评论？'

  constructor(private store: Store<AppState>){}

  // 给子组件传递this
  sendSelf(){
    return this
  }

  // 确定按钮
  sureDelete(){
    this.mainData.splice(this.index,1)
  }
  // 点击了左边-按钮
  editClick(index){
    this.index = index
    let obj = this.store['source']['value']['shadow']
    obj.shadowActive = true
  }

  // 模拟数据（瀑布流）
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

    // console.log(this.mainData)
    // 输出结果
    // console.log(JSON.stringify(this.mainData, null, 4))

    this.lock = false

  }

  ngOnInit(){
    this.getData()
    myScroll($, this, 30)
  }

  //  当组件销毁的时候
  ngOnDestroy(){
    unScroll($)
  }
}
