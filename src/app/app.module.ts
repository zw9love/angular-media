import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { Home } from '../pages/Home';
import { Sugguestion } from '../pages/Sugguestion';
import { MyComment } from '../pages/MyComment';
import { MyLike } from '../pages/MyLike';
import { MyOrder } from '../pages/MyOrder';
import { Show } from '../pages/Show';
import { Recommend } from '../components/Recommend';
import { BigRecommend } from '../components/BigRecommend';
import { MyTitle } from '../components/MyTitle';
import { Comment } from '../components/Comment';

// 定义常量 路由
const appRoutes:Routes = [
  {path: '', component: Home},
  {path: 'sugguest', component: Sugguestion},
  {path: 'myComment', component: MyComment},
  {path: 'myLike', component: MyLike},
  {path: 'myOrder', component: MyOrder},
  {path: 'show', component: Show},
];


@NgModule({
  declarations: [
    AppComponent,
    Home,
    Recommend,
    BigRecommend,
    Sugguestion,
    MyTitle,
    MyComment,
    MyLike,
    MyOrder,
    Show,
    Comment
  ],
  // 引入组件
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
