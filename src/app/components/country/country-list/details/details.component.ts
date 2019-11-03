import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CountryService } from '../../country.service';
import { Country } from '../../country';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  country: Country;
  constructor(
        private countryService: CountryService,
      private route: ActivatedRoute) { }
      
      
  ngOnInit() {
      this.getChartsData();
  }		
  
  getChartsData() {
      this.route.params.subscribe((params:Params) => {
     //     console.log("params['country-id']",params['country-id']);
          if(params['country-id']) {
              this.countryService.getCountryId(+params['country-id'])
                  .subscribe(data => {
                      console.log("id",data)
                      this.country = data;
                     
                  });
          }
      });

  }
}
