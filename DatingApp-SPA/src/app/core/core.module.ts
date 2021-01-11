import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './authentication/authentication.service';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [AuthenticationService],
  exports: [
    HeaderComponent,
  ]
})
export class CoreModule { }
