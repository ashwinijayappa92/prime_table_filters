import {NgModule} from '@angular/core';
import {Routes,Router,RouterModule} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import {EmployeeComponent} from '../employee/employee.component';
import {HomeComponent} from './home.component';
import {ProductComponent} from '../product/product.component';
import {ImagesComponent} from '../images/images.component';
import { NotFoundComponent } from '../../error/not-found/not-found.component';
import { ServerErrorComponent } from '../../error/server-error/server-error.component';
import { PrimeComponent } from '../../components/prime/prime.component';
import {UserDashboardComponent} from '../user-dashboard/user-dashboard.component';
import {FilterComponent} from '../filter/filter.component';
import { AdminComponent } from '../../admin/admin.component';
import {AuthGuard} from '../../guards/auth.guard';
import {Role} from '../../models/role';
import { LandingComponent } from '../../components/landing/landing.component';
import {CanloadGuardService} from '../../services/canload-guard.service';
import {CanDeactivateGuard} from '../../services/can-deactivate-guard.service';
import {CountryEditCanDeactivateGuard} from '../../services/country-edit-can-deactivate-guard.service';


const routes:Routes = [
 {path:'',component:HomeComponent,children:[
  {path:'emp',component:EmployeeComponent},
   {path:'products',component:ProductComponent,canActivate: [AuthGuard],canLoad:[CanloadGuardService]},
    {path:'img',component:ImagesComponent},
     {path:'404',component:NotFoundComponent},
    {path:'500',component:ServerErrorComponent},
    {path:'prime',component:PrimeComponent},
    {path:'user',component:UserDashboardComponent},
    {path:'filter',component:FilterComponent},
    {path:'landing',component:LandingComponent},
    {path:'admin',component:AdminComponent,canActivate:[AuthGuard],
    data:{roles:[Role.Admin] },
    },
    {path:'country', loadChildren:() => import('../country/country.module').then(m => m.CountryModule)
    },
    {
      path:'person' ,loadChildren:() =>import ('../person/person.module').then (m =>m.PersonModule)
    },
    {
      path:'dashboard',loadChildren:'../dashboard/dashboard.module#DashboardModule', canLoad:[CanloadGuardService],
      
    },
    {path:'address',loadChildren:'../../address/address.module#AddressModule', canLoad:[CanloadGuardService],
    
    },
  
 ]} ,

 
]
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule],
  providers: [ 
    CanDeactivateGuard,
    CountryEditCanDeactivateGuard,
],
})
export class HomeRoutingModule{}