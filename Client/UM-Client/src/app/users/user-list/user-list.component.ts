import { Component, Inject } from '@angular/core';
import { UserService } from '../user-service.service';
import { User } from '../user';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {


  users: User[] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'userName', 'email', 'userStatus', 'department', 'actions'];
  dataSource: User[] = [];

  constructor(private userService: UserService, private router: Router) {
    this.getUserList();
  }

  getUserList() {
    this.userService.getUsers().subscribe(
      (users: User[]) => {
        this.users = users;
        console.log(this.users);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user.userId).subscribe(
      (response: any) => {
        this.getUserList();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  editUser(user: User) {
    this.router.navigate(['/edit', user.userId]);
  }

  addUser() {
    this.router.navigate(['/add']);
  }

}
