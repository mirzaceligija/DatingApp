import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.sass']
})
export class MemberListComponent implements OnInit {

  users: User[] = [];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private notificationService: NotificationService ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.users = data['users'];
    });
  }

  /*
  loadUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    }, error => {
      this.notificationService.error(error);
    });
  }
  */
}
