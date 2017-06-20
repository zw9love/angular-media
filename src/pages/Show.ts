import {Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from '@ngrx/store';
import Mock from 'mockjs'
import { Location } from '@angular/common';
import $ from 'jquery'
import {myScroll, unScroll} from '../tool/Scroll'

interface AppState {
  // showData: object;
}

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
  shareActive = false
  shadowActive = false
  textActive = false
  starActive = false
  commentActive = false
  myComment = ''
  placeholder = '我来说两句...'

  constructor(private elementRef: ElementRef, public route: ActivatedRoute, private router: Router, private store: Store<AppState>,private location: Location) {

  }

  @ViewChild('txt')
  txt: ElementRef;

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

  // 点击返回
  goBack(){
    this.location.back();
  }

  // 点击收藏
  starClick(){
    // 禁止连续点击
    if(this.store['source']['value']['maskLock']) return
    let action ={type: 'setMaskLock',value:true}
    this.store.dispatch(action)

    this.starActive = !this.starActive
    let mask = this.store['source']['value']['mask']
    mask.msg = this.starActive ? '已添加收藏' : '已取消收藏'
    mask.toggleActive()
  }

  // 点击发表评论按钮
  textClick(){
    let txt = this.txt.nativeElement
    txt.focus()
    this.myComment = ''
    this.placeholder = '我来说两句...'
    this.commentActive = false
    this.shadowActive = true
    this.textActive = true
  }

  // 评论cell的msg按钮的点击事件
  commentCellClick(){
    this.myComment = ''
    this.commentActive = true
    this.shadowActive = true
    this.textActive = true
  }

  // 取消发表
  cancelText(){
    this.shadowActive = false
    this.textActive = false
  }

  // 确定发表
  sureText(){
    this.cancelText()
    if(this.commentActive){
      let arr = this.store['source']['value']['commentData']
      let name = ''
      if(this.placeholder.search('回复') != -1){
        name = this.placeholder.slice(3)
        // console.log(name)
      }

      let data = {
        'name1': '旺仔小牛奶',
        'name2': name,
        'info': this.myComment
      }
      arr.push(data)
      // console.log(arr)
    }else {
      let data = {
        'title': this.myComment,
        'author': '旺仔小牛奶',
        'msg_num': 0,
        'like_num': 0,
        'time': '刚刚',
        // 评论的条数
        'data': []
      }
      this.mainData.push(data)
    }
  }

  // 点击分享
  shareClick(){
    this.shadowActive = true
    this.shareActive = true
  }

  // 取消分享
  cancel(){
    this.shadowActive = false
    this.shareActive = false
  }

  // 获取每个页面的showData
  getShowData(){
    // 讲道理，应该是根据show页面的id来拿数据的
    this.showData = this.store['source']['value']['showData']
  }

  // 获取评论块数据（瀑布流）
  getData() {
    let data = Mock.mock({
      'list|5': [{
        'title': '@ctitle(5,100)',
        'author': '@cword(2,8)',
        'msg_num|0-999': 0,
        'like_num|0-999': 0,
        'time': '@integer(1, 24)' + '小时之前',
        // 评论的条数
        'data|0-30': [{
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
    let action ={type: 'setShow',value:this}
    this.store.dispatch(action)
  }

  // 当组件销毁的时候
  ngOnDestroy(){
    unScroll($)
    let action ={type: 'setShow',value:null}
    this.store.dispatch(action)
  }
}
