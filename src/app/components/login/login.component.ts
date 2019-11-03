import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validator, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { first } from 'rxjs/Operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;
  returnUrl: any;
  error: string;

  constructor(private fb: FormBuilder, private route: Router,
    private auth: AuthService, private active: ActivatedRoute) {

    if (auth.currentUserValue) {
      console.log(auth.currentUserValue);
      this.route.navigate(['/home/products']);
    }
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [""],
      password: [""]
    })
    // get return url from route parameters or default to '/'
    this.returnUrl = this.active.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.loginForm.controls;
  }
  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return
    }

    this.loading = true;
    this.auth.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
      data => {
        this.route.navigate([this.returnUrl])
      },
      error => {
        this.error = error;
        this.loading = false;
      }
      )
   }
}

// submit(){
//   console.log(this.loginForm.value);
//  var  val = this.loginForm.value;
//  let username = val.username;
//  let pass = val.password;
//  var output = this.auth.checkuser(username,pass);
//   if(output == true){
//     this.route.navigate(["/home","products"])
//   }else{
//     this.route.navigate(["/home","user"])
//   }
//  }


