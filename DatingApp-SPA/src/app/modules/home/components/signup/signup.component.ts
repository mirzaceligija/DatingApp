import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  @Output() cancelSignUp = new EventEmitter();

  model: any = {};

  constructor(
    private authService: AuthenticationService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  signup(){
    this.authService.signup(this.model).subscribe(() => {
      this.notificationService.success('Registration successful')
    }, error => {
      console.log(error)
      this.notificationService.error(error.error.title);
    })
  }

  cancel() {
    this.cancelSignUp.emit(false);
  }

}
