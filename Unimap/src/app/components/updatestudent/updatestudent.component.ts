import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.scss']
})
export class UpdatestudentComponent implements OnInit {

  dataForm = new FormGroup({
    fname: new FormControl('', Validators.maxLength(15)),
    mname: new FormControl('', Validators.maxLength(15)),
    lname: new FormControl('', Validators.maxLength(15)),
    address: new FormControl('', Validators.required),
    telephone: new FormControl('', Validators.maxLength(10)),
    bday: new FormControl('', Validators.required),
    regdate: new FormControl('', Validators.required),
    batch: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    cpassword: new FormControl('', Validators.required),
  });


  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(): void {
    console.log('fName:' + this.dataForm.get('fname').value);
    console.log('mname:' + this.dataForm.get('mname').value);
    console.log('lname:' + this.dataForm.get('lname').value);
    console.log('address:' + this.dataForm.get('address').value);
    console.log('telephone:' + this.dataForm.get('telephone').value);
    console.log('bday:' + this.dataForm.get('bday').value);
    console.log('regdate:' + this.dataForm.get('regdate').value);
    console.log('batch:' + this.dataForm.get('batch').value);
    console.log('type:' + this.dataForm.get('type').value);
    console.log('username:' + this.dataForm.get('username').value);
    console.log('password:' + this.dataForm.get('password').value);
    console.log('cpassword:' + this.dataForm.get('cpassword').value);
  } 

}
