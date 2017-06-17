import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

interface AppState {
  showData: object;
}

@Component({
  selector: 'BigRecommend',
  templateUrl: 'BigRecommend.html',
  // 自动隔开作用域 相当于vue里面的scoped
  styleUrls: ['../assets/css/style_bigRecommend.css','../assets/css/style_recommend.css']
})

export class BigRecommend  implements OnInit {
  @Input()
  data: object

  ngOnInit() {

  }

  showData: object;

  constructor(public route:ActivatedRoute, private router: Router, private store: Store<AppState>){
    this.showData = store.select('show');
  }

  jump(){
    let action ={type: 'setShowData',value:this.data}
    this.store.dispatch(action);
    this.router.navigate(['show']);
  }
}
