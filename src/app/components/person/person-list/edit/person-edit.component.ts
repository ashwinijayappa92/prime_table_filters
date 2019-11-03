import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PersonService } from '../../person.service';
import { Person } from '../../person';
import { Observable } from 'rxjs';
import { DialogService } from '../../../../services/dialog.service';

@Component({
  templateUrl: './person-edit.component.html' 
}) 
export class PersonEditComponent implements OnInit { 
 personForm: FormGroup;
 person:Person;	isUpdating = false;
 constructor(private fb:FormBuilder,private route:ActivatedRoute,
    private router:Router,private serve:PersonService , private dialogService: DialogService){}

 ngOnInit(){
  this.getChartsData();
 }

        getChartsData() {
            this.route.params.subscribe(params => {
                console.log("id",params['id']);
                if(params['country-id']) {
                    this.serve.getPersonId(+params['id'])
                        .subscribe(data => {
                           // console.log("id",data)
                            this.person = data;
                            this.createForm(data);
                        });
                }
            });

        }

        createForm(person:Person){
            this.personForm = this.fb.group({
              name:person.name,
              city:person.city
            })
        }

        onFormSubmit() {
            this.isUpdating = true;
            this.person.name = this.personForm.get("name").value;
            this.person.city = this.personForm.get("city").value;
            
            this.serve.updatePerson(this.person).subscribe((ele)=>{
                this.router.navigate(['../'],{relativeTo:this.route})
            })
          }


        canDeactivate():Observable<boolean>| boolean{
            if(!this.isUpdating  && this.personForm.dirty){
                this.isUpdating = false;
                return this.dialogService.confirm("do you really want to discard the changes");
            }
          return true
        }
     
        
}