import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'LoginList',
  templateUrl: './LoginList.html',
  // 自动隔开作用域 相当于vue里面的scoped
  styleUrls: ['../assets/css/style_login.css']
})

export class LoginList {
  title = '选择登录方式'

  constructor(public route: ActivatedRoute, private router: Router){}

  goPhoneLogin(){
    this.router.navigate(['phoneLogin'])
  }
}
