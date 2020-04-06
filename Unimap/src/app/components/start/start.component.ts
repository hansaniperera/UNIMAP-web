import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  isCard : boolean;
  isTrue : boolean = true;

  dataForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private router: Router) {
    
   }


  ngOnInit() {
  }

  onFormSubmit(): void {
    console.log("aaa");
    console.log('username:' + this.dataForm.get('username').value);
    console.log('password:' + this.dataForm.get('password').value);
  }
  
  public onclick(){
    this.isCard = true;
    this.isTrue = false;
    console.log("true");
  }

  public onSubmit() {
    
    this.router.navigate(['/homepage']);
    
  }

  
}
