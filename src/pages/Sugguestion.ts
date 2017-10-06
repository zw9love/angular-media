import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'Sugguestion',
  templateUrl: 'Sugguestion.html',
  // 自动隔开作用域 相当于vue里面的scoped
  styleUrls: ['../assets/css/style_sugguestion.css']
})

export class Sugguestion {
  title = '意见反馈'
  sugguestMsg = ''
  concatMsg = ''
  active = false

  // 正则验证
  myCheck() {
    let check1 = /^1[34578]\d{9}$/.test(this.concatMsg)
    let check2 = /^[1-9][0-9]{4,9}$/.test(this.concatMsg)
    let check3 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.concatMsg)
    let check = check1 || check2 || check3
    if (this.sugguestMsg && check) {
      this.active = true
    } else {
      this.active = false
    }
  }

}
