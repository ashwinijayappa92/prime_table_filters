import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
//import 'rxjs/add/operator/switchMap';
import { CountryService } from '../../country.service';
import { Country } from '../../country';
// import { switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './country.edit.component.html' 
}) 
export class CountryEditComponent implements OnInit {
	country: Country; 
	countryForm: FormGroup;
	isUpdating = false;
	constructor(
		private countryService: CountryService,
		private route: ActivatedRoute,
		private router: Router,
	    private formBuilder: FormBuilder) { 

        }
		
    ngOnInit() {
        this.getChartsData()
        // this.route.params.pipe(
        //     switchMap(
        //       (params: Params) =>
        //       this.countryService.getCountryId(+params['country-id']))
        //       .subscribe(country => {
		// 		this.country = country;
		//       	this.createForm(country);
	    //    });
        }

  getChartsData() {
        this.route.params.subscribe(params => {
            console.log("params['country-id']",params['country-id']);
            if(params['country-id']) {
                this.countryService.getCountryId(+params['country-id'])
                    .subscribe(data => {
                        console.log("id",data)
                        this.country = data;
                     	this.createForm(data);
                    });
            }
        });

    }
    
      
	createForm(country: Country) {
        console.log("create form",country);
		this.countryForm = this.formBuilder.group({
		    name: country.name,
		    capital: country.capital,
		    currency: country.currency
		});	
	}
  	onFormSubmit() {
          console.log("submit values",this.country);
		this.isUpdating = true;  
		this.country.name = this.countryForm.get('name').value;
		this.country.capital = this.countryForm.get('capital').value;
		this.country.currency = this.countryForm.get('currency').value;
        console.log("this route", this.route);
	    this.countryService.updateCountry(this.country)
	    .subscribe(() => 
		    this.router.navigate([ '../../' ], { relativeTo: this.route })
		);
	}
}