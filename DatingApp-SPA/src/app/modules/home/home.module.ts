import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
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
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

//import { TimeAgoPipe } from 'time-ago-pipe';

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
    //TimeAgoPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxGalleryModule,
    PaginationModule.forRoot(),
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
    FileUploadModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class HomeModule { }