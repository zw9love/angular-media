import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'MyTitle',
  templateUrl: 'MyTitle.html',
  styleUrls: ['../assets/css/style_title.css']
})

export class MyTitle implements OnInit{
  @Input() title:string = ''
  @Input() active: boolean = false
  @Input() parent: object
  str = '编辑'

  goBack(){
    this.location.back();
  }

  edit(){
    this.parent['editActive'] = !this.parent['editActive']
    this.str = this.parent['editActive'] ?  '完成' : '编辑'
  }

  constructor(public route:ActivatedRoute, private router: Router,private location: Location){

  }

  ngOnInit() {
    // console.log(this.parent)
  }
}
