import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUser } from 'src/api/lib/modules/user/models/user.model'

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  baseUrl: string = 'http://localhost';
  port: string = ':3003';
  logged_user: IUser;

  public loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private router: Router,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }


  loginUser(next: Function) { 
    let is_member = false
    if (this.loginForm.valid) {
      const login_details: any = {}
      login_details.username = this.loginForm.value.username
      login_details.password = this.loginForm.value.password
      this.http.post<any>(this.baseUrl + this.port + "/login", login_details).subscribe((data) => {
        if (data.login_details.status) {
          //this.logged_user.uuid = data.login_details.user_uuid;
          console.log(data.login_details.user_uuid);
          is_member = true
          console.log(is_member)
          next(is_member)
        }else{
          this.openSnackBar('Invalid login credentials.');
          next(is_member);
        }
      });

    } else {
      this.openSnackBar('Invalid login credentials.');
      next(is_member);
    }
  }

  get_user_uuid() {
    this.logged_user.uuid;
  }

  logout() {
    this.http.delete('/api/login', {});
    this.openSnackBar('Logged out Successfully');
    this.router.navigate(['/start']);

  }


    private openSnackBar(message: string) {
      this.snackBar.open(message, 'Close', {
        duration: 5000
      });
    }
}
