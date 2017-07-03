import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from '@ngrx/store';

interface AppState {}

@Component({
  selector: 'Comment',
  templateUrl: './Comment.html',
  styleUrls: ['../assets/css/style_order.css', '../assets/css/style_comment.css']
})

export class Comment implements OnInit {
  @Input() data: object
  @Input() commentActive = false
  renderData = []
  length = 0

  goBack() {
    this.router.navigate(['']);
  }

  constructor(public route: ActivatedRoute, private router: Router, private store: Store<AppState>) {

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

  addLike(){
    if(!this.commentActive) return
    this.data['like_num']++
  }

  writeMessage(){
    if(!this.commentActive) return
    let obj = this.store['source']['value']['show']
    let action
    if(this.length <= 5){
      action = {type:'setCommentData',value:this.renderData}
    }else{
      action = {type:'setCommentData',value:this.data['data']}
    }
    this.store.dispatch(action)
    obj.placeholder = '我来说两句...'
    obj.commentCellClick()
      // console.log(action.value)
  }

  nameClick(msg){
    if(!this.commentActive) return
    let obj = this.store['source']['value']['show']
    let action
    if(this.length <= 5){
      action = {type:'setCommentData',value:this.renderData}
    }else{
      action = {type:'setCommentData',value:this.data['data']}
    }
    this.store.dispatch(action)
    obj.placeholder = `回复：${msg}`
    obj.commentCellClick()

  }

}
