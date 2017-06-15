import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { Home } from '../pages/Home.component';
import { Sugguestion } from '../pages/Sugguestion.component';
import { Recommend } from '../components/Recommend.component';
import { BigRecommend } from '../components/BigRecommend.component';
import { MyTitle } from '../components/MyTitle.component';

// 定义常量 路由
const appRoutes:Routes = [
  {path: '', component: Home},
  {path: 'sugguest', component: Sugguestion}
];


@NgModule({
  declarations: [
    AppComponent,
    Home,
    Recommend,
    BigRecommend,
    Sugguestion,
    MyTitle
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
