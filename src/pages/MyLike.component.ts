import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'MyLike',
  templateUrl: './MyLike.component.html',
  // 自动隔开作用域 相当于vue里面的scoped
})

export class MyLike {
  title = '我的收藏'
  editActive = true
}
