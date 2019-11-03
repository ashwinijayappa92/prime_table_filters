import {Injectable} from '@angular/core';
import {Observable,of} from 'rxjs';
import { map } from 'rxjs/operators';
import {Person} from './person';

const person =[
    new Person(1, 'Mahesh', 'Varanasi'),
    new Person(2, 'Ram', 'Ayodhya'),  
    new Person(3, 'Krishn', 'Mathura')
];
let personsObservable = of(person);
@Injectable()

export class PersonService{
    getPersons():Observable<Person[]>{
        return personsObservable;
    }

    getPersonId(id:number):Observable<Person>{
      return this.getPersons()
      .pipe(
       map((persons)=>{
          console.log("person",person);
         return  persons.find(person =>{
           return person.personId === id} )
       })
     )
    }


    updatePerson(person:Person):Observable<Person>{
        return this.getPersons()
        .pipe(
            map((persons)=>{
                let personObj= persons.find((obj) =>{
                return obj.personId === person.personId;
                })
                personObj = person;
                return personObj;
            })
        )
    }

    
    // updatePerson(person: Person): Observable<Person> {
    //      return this.getPersons()
    //      .pipe(
    //           map((persons) => {
    //             let personObj = persons.find(ob => ob.personId === person.personId);
    //          return   personObj = person;
    //               return personObj;
    //       })
    //     );
    // }	
}