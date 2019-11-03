import {NgModule} from '@angular/core';
import {Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import{RegisterComponent} from './components/register/register.component';
import { AdminComponent } from 'src/app/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {CustoPreloadService} from './services/custo-preload.service';
import {PageNotFoundComponent} from './page-not-found.component';

const routes:Routes = [
   {path:'login',component:LoginComponent},
  {path:'', pathMatch:'full', component:LoginComponent},
  //{path:'', pathMatch:'full', component:DashboardComponent},
  {path:'login',component:LoginComponent},
  // {path:'dashboard',component:DashboardComponent},
  {path:'register',loadChildren:'./components/register/register.module#RegisterModule',data:{preload:true}},
  {path:'home',loadChildren:() => import('./components/home/home.module').then(m => m.HomeModule), 
  },
  {path:'page',component:PageNotFoundComponent},
 { path: "**", redirectTo: "page" }
]
@NgModule({
  imports:[RouterModule.forRoot(routes,{ useHash: true,preloadingStrategy:CustoPreloadService})],
  exports:[RouterModule]

})
export class RoutingModule{}