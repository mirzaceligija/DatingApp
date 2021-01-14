import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesComponent } from './components/messages/messages.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { ListsComponent } from './components/lists/lists.component';
import { RouterModule } from '@angular/router';
import { MemberCardComponent } from './components/member-card/member-card.component';
import { MemberDetailComponent } from './components/member-detail/member-detail.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { MemberEditComponent } from './components/member-edit/member-edit.component';
import { PhotoEditorComponent } from './components/photo-editor/photo-editor.component';
import { FileUploadModule } from 'ng2-file-upload';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    SignupComponent,
    HomeComponent,
    MessagesComponent,
    MemberListComponent,
    ListsComponent,
    MemberCardComponent,
    MemberDetailComponent,
    MemberEditComponent,
    PhotoEditorComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgxGalleryModule,
    TabsModule.forRoot(),
    FileUploadModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class HomeModule { }