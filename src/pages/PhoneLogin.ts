import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'PhoneLogin',
  templateUrl: './PhoneLogin.html',
  // 自动隔开作用域 相当于vue里面的scoped
  styleUrls: ['../assets/css/style_phone_login.css']
})

export class PhoneLogin {
  title = '手机号登录'
}
