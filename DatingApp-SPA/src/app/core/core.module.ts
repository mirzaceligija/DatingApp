import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './authentication/authentication.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [AuthenticationService],
  exports: [
    HeaderComponent,
  ]
})
export class CoreModule { }
