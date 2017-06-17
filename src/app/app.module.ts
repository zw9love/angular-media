import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from "@angular/router";
// import {createStore} from 'redux';
import { StoreModule } from '@ngrx/store';
import { showReducer } from '../store/show';

import {AppComponent} from './app.component';
import {Home} from '../pages/Home';
import {Sugguestion} from '../pages/Sugguestion';
import {MyComment} from '../pages/MyComment';
import {MyLike} from '../pages/MyLike';
import {MyOrder} from '../pages/MyOrder';
import {Show} from '../pages/Show';
import {Recommend} from '../components/Recommend';
import {BigRecommend} from '../components/BigRecommend';
import {MyTitle} from '../components/MyTitle';
import {Comment} from '../components/Comment';
import {OrderCell} from '../components/OrderCell';

// 定义常量 路由
const appRoutes: Routes = [
  {path: '', component: Home},
  {path: 'sugguest', component: Sugguestion},
  {path: 'myComment', component: MyComment},
  {path: 'myLike', component: MyLike},
  {path: 'myOrder', component: MyOrder},
  {path: 'show', component: Show},
  // {path: 'show/:id', component: Show},
];



@NgModule({
  // 定义组件
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
    Comment,
    OrderCell,
  ],
  // 引入组件
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.provideStore({ show: showReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
