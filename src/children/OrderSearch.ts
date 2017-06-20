import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'OrderSearch',
  template: `<MySearch [title]="title" [url]="url"></MySearch>`
})

export class OrderSearch {
  title = '搜索订阅号'
  url = 'myOrder'
}
