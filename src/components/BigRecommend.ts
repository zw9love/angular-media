import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

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

  constructor(public route:ActivatedRoute, private router: Router){

  }

  jump(){
    this.router.navigate(['show']);
  }
}
