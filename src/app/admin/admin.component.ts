import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../models';
import { UserService } from '../services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: User={
    id:null,
    username:"",
    password:"",
    firstName:"",
    lastName:"",
    token:"",
    role:""
 };

  constructor(private userService: UserService) {}

  ngOnInit() {
      this.userService.getAll().pipe(first()).subscribe(ele => { 
          this.users = ele; 
      });
  }

}
