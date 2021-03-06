import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { PreventUnsavedChangesGuard } from 'src/app/core/guards/prevent-unsaved-changes.guard';
import { ListResolver } from 'src/app/core/resolvers/list.resolver';
import { MemberDetailResolver } from 'src/app/core/resolvers/member-detail.resolver';
import { MemberEditResolver } from 'src/app/core/resolvers/member-edit.resolver';
import { MemberListResolver } from 'src/app/core/resolvers/member-list.resolver';
import { MessagesResolver } from 'src/app/core/resolvers/messages.resolver';
import { ListsComponent } from './components/lists/lists.component';
import { MemberDetailComponent } from './components/member-detail/member-detail.component';
import { MemberEditComponent } from './components/member-edit/member-edit.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}},
      { path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
      { path: 'member/edit', component: MemberEditComponent, resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChangesGuard]},
      { path: 'messages', component: MessagesComponent, resolve: {messages: MessagesResolver}},
      { path: 'lists', component: ListsComponent, resolve: {users: ListResolver}},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
