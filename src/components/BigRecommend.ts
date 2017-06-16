import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'BigRecommend',
  templateUrl: 'BigRecommend.html',
  // 自动隔开作用域 相当于vue里面的scoped
  styleUrls: ['../assets/css/style_bigRecommend.css','../assets/css/style_recommend.css']
})

export class BigRecommend  implements OnInit {
  @Input()
  data: object

  ngOnInit() {

  }
}
