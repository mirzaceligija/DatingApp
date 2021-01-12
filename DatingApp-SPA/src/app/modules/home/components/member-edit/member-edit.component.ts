import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.sass']
})
export class MemberEditComponent implements OnInit {

  user: User;

  @ViewChild('editForm', {static:true}) editForm: NgForm;
  @HostListener('window:beforeunload', ['$event'])

  unloadNotification($event: any){
    if(this.editForm.dirty){
      $event.returnValue = true;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private usersService: UserService,
    private authService: AuthenticationService,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    })
  }

  updateUser(){
    this.usersService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(next => {
      this.notificationService.success('Profile updated successfully!');
      this.editForm.reset(this.user);
    }, error => {
      this.notificationService.error(error);
    });
  }
}
