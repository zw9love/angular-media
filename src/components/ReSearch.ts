import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'RecommendSearch',
  template: `
    <MySearch [title]="title" [url]="url"></MySearch>`
})

export class ReSearch {
  title = '搜索推荐号'
  url = 'recommendSearch'
}
