import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'MySearch',
  templateUrl: './MySearch.html',
  styleUrls: ['../assets/css/style_search.css']
})

export class MySearch implements OnInit{
  @Input() title:string = ''
  @Input() url:string = ''


  goLocation(){
    this.router.navigate([this.url])
  }



  constructor(public route:ActivatedRoute, private router: Router){

  }

  ngOnInit() {
    // console.log(this.parent)
  }
}
