import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { LoginUserService } from '../../services/login.service'
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  isCard: boolean;
  isTrue: boolean = true;

  dataForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private router: Router,
    private login_user: LoginUserService,
    private snackBar: MatSnackBar
  ) {

  }


  ngOnInit() {
  }

  onFormSubmit(): void {
    console.log('username:' + this.dataForm.get('username').value);
    console.log('password:' + this.dataForm.get('password').value);
  }

  public onclick() {
    this.isCard = true;
    this.isTrue = false;

  }

  public onSubmit() {
    this.login_user.loginForm = this.dataForm;
    this.login_user.loginUser(is_logged=>{
      if (is_logged){
        this.router.navigate(['/homepage']);
      }else {
        this.openSnackBar('Invalid login');
      }
     });
   }

   private openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000
    });
  }


}
