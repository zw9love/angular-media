import {Component, EventEmitter, Input, Output, ElementRef, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import Mock from 'mockjs'

@Component({
  selector: 'Home',
  templateUrl: 'Home.component.html',
  // template: '<hero-form></hero-form>',
  styleUrls: ['../assets/css/style_home_common.css', '../assets/css/style_recommend.css']
})

export class Home {
  data = ['推荐', '行业', '订阅', '时尚', '美妆', '教育', '推荐2', '行业2', '订阅2', '时尚2', '美妆2', '教育2',
    '推荐', '行业', '订阅', '时尚', '美妆', '教育', '推荐2', '行业2', '订阅2', '时尚2', '美妆2', '教育2',
    '推荐', '行业', '订阅', '时尚', '美妆', '教育', '推荐2', '行业2', '订阅2', '时尚2', '美妆2', '教育2'];
  activeIndex = 0;
  mainData: object;

  constructor() {

  }

  firstClick(index) {
    this.activeIndex = index
  }

  @ViewChild('smallCell')
  smallCellDiv: ElementRef;
  @ViewChild('bigCell')
  bigCellDiv: ElementRef;

  // ngAfterViewInit这玩意就是事件
  ngAfterViewInit() {
    // 只能拿到一个
    console.log(this.smallCellDiv)
    console.log(this.bigCellDiv)

    // this.smallCellDiv.nativeElement.style.backgroundColor = 'red';
    // this.bigCellDiv.nativeElement.style.backgroundColor = 'red';
  }

  ngOnInit(){
    /*
      {
       'title': '@ctitle(6,40)',
       'author':'@cword(2,8)',
       'msg_num|0-999':0,
       'eye_num|0-999':0,
       'isMovie':'@boolean',
       },
   */

    this.mainData = Mock.mock({
      'list|10': [{
        'list|4':[
          {
            'title': '@ctitle(6,100)',
            'author':'@cword(2,8)',
            'msg_num|0-999':0,
            'eye_num|0-999':0,
            'isMovie':'@boolean',
          },
        ]
      }],
    }).list

    // 输出结果
    // console.log(JSON.stringify(this.mainData, null, 4))
  }

}
