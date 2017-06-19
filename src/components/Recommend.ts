import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

interface AppState {
  showData: object;
}

@Component({
  selector: 'Recommend',
  templateUrl: 'Recommend.html',
  styleUrls: ['../assets/css/style_recommend.css']
})


export class Recommend implements OnInit {
  @Input()
  data: object

  ngOnInit() {
    //console.log(this.data);    // 父组件内传入的值或者我们自己设置的初始值0
  }

  // showData: object;

  constructor(public route: ActivatedRoute, private router: Router, private store: Store<AppState>) {
    // this.showData = store.select('showData');
  }

  jump() {
    let action ={type: 'setShowData',value:this.data}
    this.store.dispatch(action)
    this.router.navigate(['show',this.data['id']])
    // console.log(this.store['source']['value'])
  }
}
