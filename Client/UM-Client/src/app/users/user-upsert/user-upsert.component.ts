import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-upsert',
  templateUrl: './user-upsert.component.html',
  styleUrls: ['./user-upsert.component.css']
})
export class UserUpsertComponent implements OnInit {
  userForm: any;
  userId: string | undefined;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id')!;

    if (this.userId) {
      this.userService.getUserById(+this.userId).subscribe(userDetails => {
        this.userForm = this.formBuilder.group({
          userId: [userDetails.userId],
          userName: [userDetails.userName, Validators.required],
          firstName: [userDetails.firstName, Validators.required],
          lastName: [userDetails.lastName, Validators.required],
          email: [userDetails.email, Validators.required],
          userStatus: [userDetails.userStatus, Validators.required],
          department: [userDetails.department],
        });
      });
    }
    else {
      this.userForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        userName: ['', Validators.required],
        email: ['', Validators.required],
        userStatus: ['', Validators.required],
        department: [''],
      });
    }


  }

  onSubmit() {
    if (this.userForm.value.userId) {
      this.userService.updateUser(this.userForm.value.userId, this.userForm.value).subscribe(
        (response) => {
          console.log(response);
          this.redirectToListPage();
        },
        (error) => {
          // Handle error response
          console.error(error);
        }
      );
    }
    else {
      this.userService.createUser(this.userForm.value).subscribe(
        (response) => {
          console.log(response);
          this.redirectToListPage();
        },
        (error) => {
          // Handle error response
          console.error(error);
        }
      );
    }
  }
  redirectToListPage() {
    this.router.navigate(['/']);
  }
}
