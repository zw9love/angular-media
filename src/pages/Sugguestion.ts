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

  sugguestChange(){
    console.log(this.sugguestMsg)
    console.log(this.concatMsg)
  }

  concatChange(){
    console.log(this.sugguestMsg)
    console.log(this.concatMsg)
  }
}
