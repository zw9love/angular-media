import {RouterModule, Routes} from "@angular/router";

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


// 定义常量 嵌套自路由
const appHomeChildRoutes = [
  {path: '', component: ReSearch},
  {path: 'order', component: OrderSearch},
  {path: 'industry', component: IndustryNav},
]

// 定义常量 路由
export const appRoutes = [
  {path: '', component: Home, children: appHomeChildRoutes},
  {path: 'sugguest', component: Sugguestion},
  {path: 'myComment', component: MyComment},
  {path: 'myLike', component: MyLike},
  {path: 'myOrder', component: MyOrder},
  {path: 'show/:id', component: Show},
  {path: 'subscribe', component: Subscribe},
  {path: 'recommendSearch', component: RecommendSearch},
  {path: 'orderShow/:id', component: OrderShow},
  {path: 'loginList', component: LoginList},
  {path: 'phoneLogin', component: PhoneLogin},
];
