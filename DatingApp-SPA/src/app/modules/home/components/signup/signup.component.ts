import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  @Output() cancelSignUp = new EventEmitter();

  user: User;
  signupForm: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.bsConfig = {
      containerClass: 'theme-blue'
    };
    this.createSignupForm();
  }

  createSignupForm() {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      gender: ['male'],
      nickname: ['', Validators.required],
      dateOfBirth: [null, Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      confirmPassword: ['', Validators.required],
    }, {validator: this.passwordMatchValidator});
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value ? null : {'mismatch': true};
  }

  signup(){
    if(this.signupForm.valid) {
      this.user = Object.assign({}, this.signupForm.value);
      this.authService.signup(this.user).subscribe(() => {
        this.notificationService.success('Registration successful!');
      }, error => {
        this.notificationService.error(error);
      }, () => {
        this.authService.login(this.user).subscribe(() => {
          this.router.navigate(['/members']);
        })
      });
    }
  }

  cancel() {
    this.cancelSignUp.emit(false);
  }

}
