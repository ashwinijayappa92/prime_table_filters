import {Component} from '@angular/core';
import{FormGroup,FormControl,FormBuilder} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import{Country} from '../country';
import{CountryService} from '../country.service';
import { Observable } from 'rxjs';
import { DialogService } from '../../../services/dialog.service';
@Component({
    templateUrl: './add-country.component.html'
})

export class AddCountryComponent{
    countryForm:FormGroup;
    isAdding:boolean = false;
constructor(private fb:FormBuilder,private route:ActivatedRoute,
    private router:Router,private serve:CountryService , private dialogService: DialogService){}
    ngOnInit(){
    this.countryForm = this.fb.group({
     name:'',
     capital:'',
     currency:''
    })
}

      onFormSubmit() {
            console.log("coutries getting",this.serve.getCountries);
            this.isAdding = true;
            let name = this.countryForm.get('name').value;
            let currency = this.countryForm.get('currency').value;
            let capital = this.countryForm.get('capital').value;
            const country = new Country(null,name,capital,currency);
            this.serve.addCountry(country).subscribe((ele)=>{
                console.log("ele",ele);
                this.router.navigate([ '../list/view',ele.countryId],{relativeTo:this.route})
            })
    }


    canDeactivate():Observable<boolean>| boolean{
        if(!this.isAdding && this.countryForm.dirty){
            return  this.dialogService.confirm('Discard unsaved Country?');
        }
    }

}
