import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { UserService } from 'src/app/core/services/user.service';
import { Message } from 'src/app/shared/models/message';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.sass']
})
export class MemberMessagesComponent implements OnInit {

  @Input() recipientId: number;
  messages: Message[];
  newMessage: any = {};

  constructor(
    private authService: AuthenticationService,
    private usersService: UserService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages(){
    const currentUserId = +this.authService.decodedToken.nameid;
    this.usersService.getMessageThread(this.authService.decodedToken.nameid, this.recipientId)
      .pipe( tap(messages => {
        for(let i = 0; i < messages.length; i++){
          if(messages[i].isRead === false && messages[i].recipientId === currentUserId){
            this.usersService.markAsRead(currentUserId, messages[i].id);
          }
        }
        }) 
      )
      .subscribe(messages => {
        this.messages = messages;
      }, error => {
        this.notificationService.error(error);
      })
  }

  sendMessage(){
    this.newMessage.recipientId = this.recipientId;
    this.usersService.sendMessage(this.authService.decodedToken.nameid, this.newMessage)
      .subscribe((message: any) => {
        this.messages.unshift(message);
        this.newMessage.content = '';
      }, error => {
        this.notificationService.error(error);
      })
  }
}
