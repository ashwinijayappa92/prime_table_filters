import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './routing.module';
import { LoginComponent } from './components/login/login.component';
// import { RegisterComponent } from './components/register/register.component';
import { ProductService } from './services/product.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ErrorService } from './error/error.service';
// import { AuthGuard } from './services/auth-guard.service';
import { JwtInterceptor, ErrorInterceptor } from 'src/app/helpers';
import {fakeBackendProvider } from 'src/app/helpers';
import {CustoPreloadService} from './services/custo-preload.service';
import { PreloadAllModules } from "@angular/router";
import {PageNotFoundComponent} from './page-not-found.component';
// import { SurveyComponent } from './components/survey/survey.component';




// import { PrimeComponent } from './components/prime/prime.component';



@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, SharedModule, RoutingModule,
    HttpClientModule,
    BrowserAnimationsModule],
  declarations: [AppComponent, LoginComponent,PageNotFoundComponent],
  bootstrap: [AppComponent],
  providers: [ProductService, ErrorService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,
    CustoPreloadService
  ]
})
export class AppModule { }
