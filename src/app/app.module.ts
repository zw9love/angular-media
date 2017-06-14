import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Home } from '../pages/Home.component';
import { Recommend } from '../components/Recommend.component';
import { BigRecommend } from '../components/BigRecommend.component';


@NgModule({
  declarations: [
    AppComponent,
    Home,
    Recommend,
    BigRecommend
  ],
  // 引入组件
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
