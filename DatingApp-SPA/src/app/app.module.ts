import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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
import { ListResolver } from './core/resolvers/list.resolver';
import { MessagesResolver } from './core/resolvers/messages.resolver';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    CoreModule,
    SharedModule,
    RouterModule,
    FormsModule,
  ],
  providers: [
    ErrorInterceptorProvider,
    MemberDetailResolver,
    MemberListResolver,
    MemberEditResolver,
    ListResolver,
    MessagesResolver,
    PreventUnsavedChangesGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
