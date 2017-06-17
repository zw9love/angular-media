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

  goBack(){
    this.location.back();
  }

  constructor(public route:ActivatedRoute, private router: Router,private location: Location){

  }

  ngOnInit() {
    // console.log(this.title)
  }
}
