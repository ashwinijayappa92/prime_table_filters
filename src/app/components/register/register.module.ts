
 
import { NgModule } from '@angular/core';
 import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import {SharedModule} from '../../shared/shared.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
 declarations: [RegisterComponent],
 imports: [
    RegisterRoutingModule,
    SharedModule,FormsModule,ReactiveFormsModule
 ],
 providers: [],
})
export class RegisterModule { }
