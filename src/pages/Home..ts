import {Component, EventEmitter, Input, Output, ElementRef, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import Mock from 'mockjs'
import $ from 'jquery'
import {myScroll, unScroll} from '../tool/Scroll'

@Component({
  selector: 'Home',
  templateUrl: 'Home.html',
  // template: '<hero-form></hero-form>',
  styleUrls: ['../assets/css/style_home_common.css']
})

export class Home {
  data = [];
  asideData = [
    {src: '../assets/img/myorder.png', name: '我的订阅',url:'myOrder'},
    {src: '../assets/img/star.png', name: '我的收藏',url:'myLike'},
    {src: '../assets/img/fix_msg.png', name: '我的评论',url:'myComment'},
    {src: '../assets/img/suggestion.png', name: '意见反馈',url:'sugguest'},
    {src: '../assets/img/quit.png', name: '退出'},
  ]
  activeIndex = 0;
  mainData = [];
  lock = false
  asideActive = false
  timer = null
  asideStyle = {}

  constructor() {

  }

  @ViewChild('smallCell')
  smallCellDiv: ElementRef;
  @ViewChild('bigCell')
  bigCellDiv: ElementRef;

  // 一级菜单点击事件
  firstClick(index) {
    if(this.activeIndex == index) return
    this.activeIndex = index
    this.mainData = []
    this.getData()
  }

  // 显示侧边栏
  showAside() {

    let scrollTop = $(window).scrollTop()
    this.asideStyle = {'top': scrollTop + 'px'}

    if (this.asideActive) {
      clearInterval(this.timer)
      this.timer = setTimeout(() => {
        $('body').removeClass('body')
        $('html').removeClass('html')
      }, 800)
    } else {
      $('body').addClass('body')
      $('html').addClass('html')
    }
    this.asideActive = !this.asideActive
  }

  // 模拟数据
  getData() {
    let data = Mock.mock({
      'list|3': [{
        'list|4': [
          {
            'title': '@ctitle(6,100)',
            'author': '@cword(2,8)',
            'msg_num|0-999': 0,
            'eye_num|0-999': 0,
            'isMovie': '@boolean',
          },
        ]
      }],
    }).list

    this.mainData = this.mainData.concat(data)

    // console.log(this.mainData)
    // 输出结果
    // console.log(JSON.stringify(this.mainData, null, 4))

    this.lock = false

  }

  // 在Angular创建完组件的视图后调用。
  ngAfterViewInit() {
    // 只能拿到一个
    console.log(this.smallCellDiv)
    console.log(this.bigCellDiv)

    // this.smallCellDiv.nativeElement.style.backgroundColor = 'red';
    // this.bigCellDiv.nativeElement.style.backgroundColor = 'red';

    myScroll($, this, 20)

  }

  // 当Angular初始化完成数据绑定的输入属性后，用来初始化指令或者组件。
  ngOnInit() {
    this.getData()

    this.data = Mock.mock({
      'list|30': [{
        'name':'@cword(2, 5)'
      }],
    }).list

    // console.log(JSON.stringify(this.data, null, 4))
  }

  //  当组件销毁的时候
  ngOnDestroy(){
    $('body').removeClass('body')
    $('html').removeClass('html')
    unScroll($)
  }

}
