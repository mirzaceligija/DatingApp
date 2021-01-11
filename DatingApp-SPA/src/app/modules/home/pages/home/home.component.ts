import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  signupMode = false;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  signupToggle(){
    this.signupMode = true;
  }

  cancelSignUpMode(signupMode: boolean){
    this.signupMode = signupMode;
  }

}
