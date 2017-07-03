import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from "@angular/router";
// import {createStore} from 'redux';
import {StoreModule} from '@ngrx/store';

import {store} from '../store/index';
import {appRoutes} from '../route/index';

import {AppComponent} from './app.component';
import {Home} from '../pages/Home';
import {Sugguestion} from '../pages/Sugguestion';
import {MyComment} from '../pages/MyComment';
import {MyLike} from '../pages/MyLike';
import {MyOrder} from '../pages/MyOrder';
import {Show} from '../pages/Show';
import {RecommendSearch} from '../pages/RecommendSearch';
import {Subscribe} from '../pages/Subscribe';
import {OrderShow} from '../pages/OrderShow';
import {LoginList} from '../pages/LoginList';
import {PhoneLogin} from '../pages/PhoneLogin';
import {OrderSearch} from '../components/OrderSearch';
import {ReSearch} from '../components/ReSearch';
import {IndustryNav} from '../components/IndustryNav';
import {Recommend} from '../components/Recommend';
import {BigRecommend} from '../components/BigRecommend';
import {MyTitle} from '../components/MyTitle';
import {Comment} from '../components/Comment';
import {OrderCell} from '../components/OrderCell';
import {Shadow} from '../components/Shadow';
import {Mask} from '../components/Mask';
import {TitleSearch} from '../components/TitleSearch';
import {MySearch} from '../components/MySearch';



@NgModule({
  // 定义组件
  declarations: [
    AppComponent,
    Recommend,
    BigRecommend,
    MyTitle,
    Comment,
    OrderCell,
    Shadow,
    Mask,
    TitleSearch,
    Home,
    Sugguestion,
    MyComment,
    MyLike,
    MyOrder,
    Show,
    Subscribe,
    RecommendSearch,
    OrderShow,
    LoginList,
    PhoneLogin,
    MySearch,
    OrderSearch,
    ReSearch,
    IndustryNav
  ],
  // 引入组件
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.provideStore(store)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
