import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'Recommend',
  templateUrl: './Recommend.component.html',
  styleUrls: ['../assets/css/style_recommend.css']
})

export class Recommend  implements OnInit {
  @Input()
  data: object

  ngOnInit() {
    //console.log(this.data);    // 父组件内传入的值或者我们自己设置的初始值0
  }
}
