import {Component, EventEmitter, Input, Output} from '@angular/core';

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

  mainData = [
    [
    {isMovie:false,title:'卡通人物客串super model 这样很Disney卡通人物客串super model 这样很Disney1',author:'时尚芭莎1',msg_num:100,eye_num:200},
    {isMovie:true,title:'卡通人物客串super model 这样很Disney卡通人物客串super model 这样很Disney2',author:'时尚芭莎2',msg_num:666,eye_num:777},
    {isMovie:false,title:'卡通人物客串super model 这样很Disney卡通人物客串super model 这样很Disney3',author:'时尚芭莎3',msg_num:888,eye_num:999},
    {isMovie:false,title:'欧洲杯期间，穿的美美的看球才是正经事4',author:'时尚芭莎4',msg_num:200,eye_num:100}
    ],
    [
      {isMovie:true,title:'卡通人物客串super model 这样很Disney卡通人物客串super model 这样很Disney5',author:'时尚芭莎5',msg_num:100,eye_num:200},
      {isMovie:false,title:'卡通人物客串super model 这样很Disney卡通人物客串super model 这样很Disney6',author:'时尚芭莎6',msg_num:666,eye_num:777},
      {isMovie:true,title:'卡通人物客串super model 这样很Disney卡通人物客串super model 这样很Disney7',author:'时尚芭莎7',msg_num:888,eye_num:999},
      {isMovie:true,title:'欧洲杯期间，穿的美美的看球才是正经事8',author:'时尚芭莎8',msg_num:200,eye_num:100}
    ],
  ]

  constructor() {

  }

  firstClick(index) {
    this.activeIndex = index
  }

}
