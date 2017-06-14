import {Component, EventEmitter, Input, Output, ElementRef, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import Mock from 'mockjs'
import $ from 'jquery'

@Component({
  selector: 'Home',
  templateUrl: './Home.component.html',
  // template: '<hero-form></hero-form>',
  styleUrls: ['../assets/css/style_home_common.css']
})

export class Home {
  data = ['推荐', '行业', '订阅', '时尚', '美妆', '教育', '推荐2', '行业2', '订阅2', '时尚2', '美妆2', '教育2',
    '推荐', '行业', '订阅', '时尚', '美妆', '教育', '推荐2', '行业2', '订阅2', '时尚2', '美妆2', '教育2',
    '推荐', '行业', '订阅', '时尚', '美妆', '教育', '推荐2', '行业2', '订阅2', '时尚2', '美妆2', '教育2'];
  asideData = [
    {src: '../assets/img/myorder.png', name: '我的订阅'},
    {src: '../assets/img/star.png', name: '我的收藏'},
    {src: '../assets/img/fix_msg.png', name: '我的评论'},
    {src: '../assets/img/suggestion.png', name: '意见反馈'},
    {src: '../assets/img/quit.png', name: '退出'},
  ]
  activeIndex = 0;
  mainData = [];
  lock = false
  asideActive = false
  timer = null

  constructor() {

  }

  @ViewChild('smallCell')
  smallCellDiv: ElementRef;
  @ViewChild('bigCell')
  bigCellDiv: ElementRef;

  // 一级菜单点击事件
  firstClick(index) {
    this.activeIndex = index
  }

  // 显示侧边栏
  showAside() {
    if (this.asideActive) {
      clearInterval(this.timer)
      this.timer = setTimeout(() => {
        $('body').removeClass('body')
      }, 800)
    } else {
      $('body').addClass('body')
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

    $(window).scroll(() => {
      let sumHeight = $(document).height()
      let clientHeight = $(window).height()
      let scrollTop = $(window).scrollTop()
      let n = (clientHeight + scrollTop) / sumHeight
      if (n >= 0.95 && !this.lock) {
        this.lock = true
        if (this.mainData.length > 20) return
        this.getData()
      }
    })
  }

  // 当Angular初始化完成数据绑定的输入属性后，用来初始化指令或者组件。
  ngOnInit() {
    this.getData()
  }

}
