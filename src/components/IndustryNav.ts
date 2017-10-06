/**
 * Created by admin on 2017/7/3.
 */
import {Component, OnInit, Input} from '@angular/core';
import Mock from 'mockjs'
import {Store} from '@ngrx/store';

interface AppState {

}

@Component({
  selector: 'IndustryNav',
  templateUrl: './IndustryNav.html',
  styleUrls: ['../assets/css/style_home_common.css']
})

export class IndustryNav {
  navData = []
  activeIndex = 0

  constructor(private store: Store<AppState>) {
    // this.showData = store.select('showData');
  }

  navClick(index) {
    if (index == this.activeIndex) return
    this.activeIndex = index
    let data = Mock.mock({
      'list|3': [{
        'list|4': [
          {
            'id': '@id',
            'title': '@ctitle(6,50)',
            'author': '@cword(2,8)',
            'msg_num|0-999': 0,
            'eye_num|0-999': 0,
            'isMovie': '@boolean',
            'isOrder': '@boolean',
            'time': '@datetime("yyyy-MM-dd")',
            'src': '../assets/img/order.png',
            'infoData|1-5': [{
              'info': '@cparagraph()',
              'src': '../assets/img/show_1.jpg'
            }]
          },
        ]
      }],
    }).list
    let home = this.store['source']['value']['home']
    home.mainData = data
  }

  //渲染导航数据
  renderNavData() {
    let data = Mock.mock({
      'list|30': [{
        'name': '@cword(2, 5)',
      }],
    }).list

    this.navData = data
  }

  ngOnInit() {
    this.renderNavData()
  }
}
