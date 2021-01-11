import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './core/authentication/authentication.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  jwtHelper = new JwtHelperService();

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if(token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }
}
