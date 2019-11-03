import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { AddressComponent  } from './address.component';
 
 
const routes: Routes = [
    { path: 'list', component: AddressComponent},
    { path: '', redirectTo:'list'},
];
 
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressRoutingModule { }