import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonComponent }  from './person.component';
import { PersonListComponent }  from './person-list/person-list.component';
import { PersonEditComponent }  from './person-list/edit/person-edit.component';
import {CountryEditCanDeactivateGuard} from '../../services/country-edit-can-deactivate-guard.service';
import {CanDeactivateGuard} from '../../services/can-deactivate-guard.service';
const personRoutes: Routes = [
	{ 
	  path: 'person',
      component: PersonComponent,
	  children: [ 
	    {
		path: '',
		component: PersonListComponent,
		children: [
		   {
		     path: ':id',
             component: PersonEditComponent,
             canDeactivate: [CanDeactivateGuard]
		   }
		]			
	    }
	  ]
    } ,
    {
        path:'',
        pathMatch:'full',
        redirectTo:'person/list',
       
   } 
];

@NgModule({
  imports: [ RouterModule.forChild(personRoutes) ],
  exports: [ RouterModule ]
})
export class PersonRoutingModule{ } 