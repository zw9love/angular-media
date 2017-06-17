import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'OrderCell',
  templateUrl: './OrderCell.html',
  // styleUrls: ['../assets/css/style_orderCell.css']
})

export class OrderCell implements OnInit{
  @Input() orderActive: boolean = false

  orderClick(){
    this.orderActive = !this.orderActive
  }

  ngOnInit() {
    // console.log(this.orderActive)
  }
}
