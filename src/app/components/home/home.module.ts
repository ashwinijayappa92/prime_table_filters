import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import { HomeComponent } from '../../components/home/home.component';
import { HeaderComponent } from '../../components/header/header.component';
import { EmployeeComponent } from '../../components/employee/employee.component';
import { RouterModule } from '@angular/router';
import {HomeRoutingModule} from './home-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from '../../components/product/product.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImagesComponent } from '../../components/images/images.component';
import { NotFoundComponent } from '../../error/not-found/not-found.component';
import { ServerErrorComponent } from '../../error/server-error/server-error.component';
import { UserDashboardComponent } from '../../components/user-dashboard/user-dashboard.component';
import { PrimeComponent } from '../../components/prime/prime.component';
import { FilterComponent } from '../../components/filter/filter.component';
import { AdminComponent } from '../../admin/admin.component';
import {UserService} from '../../services/user.service';
import { LandingComponent } from '../../components/landing/landing.component';
import{CanloadGuardService} from '../../services/canload-guard.service';
import{SurveyComponent} from '../../components/survey/survey.component'

@NgModule({
  imports:    
  [ FormsModule ,SharedModule,CommonModule,RouterModule,HomeRoutingModule,
  FlexLayoutModule,
  HttpClientModule,
  ReactiveFormsModule
  ],
  declarations: [ HomeComponent, HeaderComponent,ProductComponent, EmployeeComponent ,PrimeComponent,
  ImagesComponent,ServerErrorComponent,NotFoundComponent,UserDashboardComponent,
  FilterComponent,AdminComponent,LandingComponent,SurveyComponent
],
  exports:[EmployeeComponent],
  providers:[UserService,CanloadGuardService]
 
})
export class HomeModule { }
