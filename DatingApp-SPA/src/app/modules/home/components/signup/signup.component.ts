import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  @Output() cancelSignUp = new EventEmitter();

  model: any = {};

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  signup(){
    this.authService.signup(this.model).subscribe(() => {
      console.log('Registration successful')
    }, error => {
      console.log('Error', error);
    })
  }

  cancel() {
    this.cancelSignUp.emit(false);
  }

}
