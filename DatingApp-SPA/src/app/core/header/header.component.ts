import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  model: any = {}

  constructor(
    public authService: AuthenticationService,
    private notificationService: NotificationService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.notificationService.success('Logged in successfully');
    }, error => {
      this.notificationService.error(error);
    }, () => {
      this.router.navigate(['members']);
    });
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

  logout(){
    localStorage.removeItem('token');
    this.notificationService.message('Logged out!');
    this.router.navigate(['/']);
  }

}
