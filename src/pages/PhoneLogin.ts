import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'PhoneLogin',
  templateUrl: './PhoneLogin.html',
  // 自动隔开作用域 相当于vue里面的scoped
  styleUrls: ['../assets/css/style_phone_login.css']
})

export class PhoneLogin {
  title = '手机号登录'
  phoneMsg = ''
  provMsg = ''
  provActive = false
  loginActive = false
  lock = false
  n = 60
  msg = '获取验证码'
  timer = null

  phoneMsgCheck() {
    this.myCheck()
    if (this.lock) return
    let check = /^1[34578]\d{9}$/.test(this.phoneMsg)
    if (check) {
      this.provActive = true
    } else {
      this.provActive = false
    }
  }

  // 正则验证
  myCheck() {
    let check1 = /^1[34578]\d{9}$/.test(this.phoneMsg)
    let check2 = ( (this.provMsg).trim().length == 4 )
    if (check1 && check2) {
      this.loginActive = true
    } else {
      this.loginActive = false
    }
  }

  // 获得验证码
  getProv() {
    if (this.provActive && !this.lock) {
      this.lock = true
      this.provActive = false
      this.msg = `${this.n}S`
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        this.n--
        this.msg = `${this.n}S`
        if (this.n == 0) {
          clearInterval(this.timer)
          this.lock = false
          this.n = 60
        }
      }, 1000)
    }
  }
}
