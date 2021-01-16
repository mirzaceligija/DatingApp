
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Message } from "src/app/shared/models/message";
import { AuthenticationService } from "../authentication/authentication.service";
import { NotificationService } from "../services/notification.service";
import { UserService } from "../services/user.service";

@Injectable()
export class MessagesResolver implements Resolve<Message[]> {

    pageNumber = 1;
    pageSize = 5;
    messageContainer = 'Unread';
    
    constructor(
        private authService: AuthenticationService,
        private usersService: UserService,
        private router: Router,
        private notificationService: NotificationService) {}
  
    resolve(route: ActivatedRouteSnapshot): Observable<Message[]> | any {
      return this.usersService.getMessages(this.authService.decodedToken.nameid, this.pageNumber, this.pageSize, this.messageContainer).pipe(
          catchError(error => {
              this.notificationService.error('Problem retrieving messages!');
              this.router.navigate(['/']);
              return of(null);
          })
      );
    }
  }