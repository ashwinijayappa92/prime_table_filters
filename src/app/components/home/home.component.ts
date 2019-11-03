import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User, Role } from '../../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  constructor(private auth: AuthService, private route: Router) {
    this.auth.currentUser.subscribe(x => this.currentUser = x);
  }
  ngOnInit() { }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }



  logout() {
    this.auth.logout();
    this.route.navigate(['/login']);
  }
}