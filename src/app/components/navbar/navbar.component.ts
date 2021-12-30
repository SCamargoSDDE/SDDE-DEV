import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any;
  validate: any;
  constructor(
    private login: LoginService
  ) {
    
  }

  ngOnInit(): void {
    const currentUser = this.login.currentUserValue;
    this.validate = this.login.currentUser.pipe();
  }

  logout() {
    this.login.logout();
  }
}
