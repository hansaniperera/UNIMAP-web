import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-newstudent',
  templateUrl: './newstudent.component.html',
  styleUrls: ['./newstudent.component.scss']
})
export class NewstudentComponent implements OnInit {
    fnameFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  

  ngOnInit() {
  }

  

}
