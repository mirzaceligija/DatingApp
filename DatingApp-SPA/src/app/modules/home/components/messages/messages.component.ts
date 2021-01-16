import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { UserService } from 'src/app/core/services/user.service';
import { Message } from 'src/app/shared/models/message';
import { PaginatedResult, Pagination } from 'src/app/shared/models/pagination';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent implements OnInit {

  messages: Message[];
  pagination: Pagination;
  messageContainer = 'Unread';

  constructor(
    private authService: AuthenticationService,
    private usersService: UserService,
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.messages = data['messages'].result || []; 
      this.pagination = data['messages'].pagination;
    });
  }

  loadMessages(){
    this.usersService.getMessages(this.authService.decodedToken.nameid, this.pagination.currentPage,
      this.pagination.itemsPerPage, this.messageContainer)
      .subscribe((res: PaginatedResult<Message[]>) => {
        this.messages = res.result;
        this.pagination = res.pagination;
      }, error => {
        this.notificationService.error(error);
      });
  }

  deleteMessage(id: number){
    this.notificationService.confirm('Are you sure you want to delete this message?', () => {
      this.usersService.deleteMessage(id, this.authService.decodedToken.nameid).subscribe(() => {
        this.messages.splice(this.messages.findIndex(m => m.id === id), 1);
        this.notificationService.success('Message has been deleted');
      }, error => {
        this.notificationService.error('Failed to delete the message!');
      });
    });
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadMessages();
  }

}
