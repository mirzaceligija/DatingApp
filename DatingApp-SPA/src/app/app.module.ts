import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorInterceptorProvider } from './core/interceptors/error.interceptor';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { MemberDetailResolver } from './core/resolvers/member-detail.resolver';
import { MemberListResolver } from './core/resolvers/member-list.resolver';
import { RouterModule } from '@angular/router';
import { MemberEditResolver } from './core/resolvers/member-edit.resolver';
import { PreventUnsavedChangesGuard } from './core/guards/prevent-unsaved-changes.guard';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    CoreModule,
    SharedModule,
    RouterModule,
  ],
  providers: [
    ErrorInterceptorProvider,
    MemberDetailResolver,
    MemberListResolver,
    MemberEditResolver,
    PreventUnsavedChangesGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
