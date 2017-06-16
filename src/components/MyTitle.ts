import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'MyTitle',
  templateUrl: 'MyTitle.html',
  styleUrls: ['../assets/css/style_title.css']
})

export class MyTitle implements OnInit{
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
