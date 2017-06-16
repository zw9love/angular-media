import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'Comment',
  templateUrl: './Comment.html',
  styleUrls: ['../assets/css/style_order.css', '../assets/css/style_comment.css']
})

export class Comment implements OnInit {
  @Input() data: object
  renderData = []
  length = 0

  goBack() {
    this.router.navigate(['']);
  }

  constructor(public route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.renderData = this.data['data'].slice(0, 5)
    this.length = this.data['data'].length
    // console.log(this.renderData)
  }

  more() {
    this.renderData = this.data['data']
    this.length = 0
    // console.log(this.data['data'])
  }

}
