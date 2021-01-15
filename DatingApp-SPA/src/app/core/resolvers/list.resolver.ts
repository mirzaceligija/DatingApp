import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { User } from "src/app/shared/models/user";
import { NotificationService } from "../services/notification.service";
import { UserService } from "../services/user.service";

@Injectable()
export class ListResolver implements Resolve<User[]> {

    pageNumber = 1;
    pageSize = 5;
    likesParam = 'Likers';
    
    constructor(
        private usersService: UserService,
        private router: Router,
        private notificationService: NotificationService) {}
  
    resolve(route: ActivatedRouteSnapshot): Observable<User[]> | any {
      return this.usersService.getUsers(this.pageNumber, this.pageSize, null, this.likesParam).pipe(
          catchError(error => {
              this.notificationService.error('Problem retrieving data');
              this.router.navigate(['/']);
              return of(null);
          })
      );
    }
  }