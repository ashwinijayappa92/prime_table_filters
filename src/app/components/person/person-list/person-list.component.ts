import {Component,OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {PersonService} from '../person.service';
import{ActivatedRoute,Router} from '@angular/router';
import{Person} from '../person';

@Component({
    templateUrl: './person-list.component.html' 
  })
  export class PersonListComponent implements OnInit { 
      persons:Observable<Person[]>;
      constructor(private serve: PersonService ,private route:ActivatedRoute,private router:Router){

      }
      ngOnInit(){
        this.persons = this.serve.getPersons();
      }

      goToEdit(person:Person){
        this.router.navigate([person.personId],{relativeTo:this.route})
      }
  }