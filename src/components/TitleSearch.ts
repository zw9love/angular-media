import {Component, OnInit, Input} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'TitleSearch',
  templateUrl: './TitleSearch.html',
  // 自动隔开作用域 相当于vue里面的scoped
  styleUrls: ['../assets/css/style_titleSearch.css']
})

export class TitleSearch implements OnInit {
  @Input() placeholder: string = ''

  ngOnInit() {
    // console.log(this.parent)
  }

  constructor(private location: Location) {

  }

  goBack() {
    this.location.back();
  }
}
