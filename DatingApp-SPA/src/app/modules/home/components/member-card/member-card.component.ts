import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.sass']
})
export class MemberCardComponent implements OnInit {

  @Input() user: User;

  constructor(
    private authService: AuthenticationService,
    private usersService: UserService,
    private notificationService: NotificationService) { 
  }

  ngOnInit(): void {
  }

  sendLike(id: number){
    this.usersService.sendLike(this.authService.decodedToken.nameid, id).subscribe(data => {
      this.notificationService.success('You have liked: ' + this.user.nickname);
    }, error => {
      this.notificationService.error(error);
    });
  }
}
