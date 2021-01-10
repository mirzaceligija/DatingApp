import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ValueComponent } from './components/value/value.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ValueComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ]
})
export class HomeModule { }