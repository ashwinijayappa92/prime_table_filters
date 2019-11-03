import {Injectable} from '@angular/core';
import {observable,of} from 'rxjs';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import{Country} from './country';
// import { observable } from 'rxjs/internal/symbol/observable';
//import { of } from 'rxjs/observable/of';

import { Observable } from 'rxjs/internal/Observable';

const countries =[
    new Country(1, 'India', 'New Delhi', 'INR'),
    new Country(2, 'China', 'Beijing', 'RMB')
]
let countriesObservable  = of(countries);


@Injectable()

export class CountryService {
    getCountries():Observable<Country[]>{
        console.log("country",countriesObservable);
     return countriesObservable;
    }

    getCountryId(id:number): Observable<Country>{
      return this.getCountries()
      .pipe(
         map((country)=>{
            return country.find((ele)=>{
                return ele.countryId === id
            })
        }))
    }

    updateCountry(country:Country):Observable<Country>{
      return this.getCountries()
      .pipe(
        map((countries)=>{
          let countryObj = countries.find(ele => ele.countryId == country.countryId);
          countryObj = country;
          return countryObj;
      }))
    }

    addCountry(country: Country): Observable<Country> {
      return this.getCountries()
      .pipe(
       map((countries)=>{
          let maxIndex = countries.length - 1;
          let countryWithMaxIndex = countries[maxIndex];
          country.countryId  =countryWithMaxIndex.countryId+1;
          countries.push(country)
          return country;
      }))

    }
}
