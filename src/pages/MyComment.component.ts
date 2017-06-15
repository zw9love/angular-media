import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'MyComment',
  templateUrl: './MyComment.component.html',
  // 自动隔开作用域 相当于vue里面的scoped
})

export class MyComment {
  title = '我的评论'
  editActive = true
}
