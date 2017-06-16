import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'Comment',
  templateUrl: './Comment.html',
  styleUrls: ['../assets/css/style_order.css','../assets/css/style_comment.css']
})

export class Comment implements OnInit{
  @Input() title:string = ''
  @Input() active: boolean = false

  goBack(){
    this.router.navigate(['']);
  }

  constructor(public route:ActivatedRoute, private router: Router){

  }

  ngOnInit() {
    // console.log(this.title)
  }
}
