import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addresult',
  templateUrl: './addresult.component.html',
  styleUrls: ['./addresult.component.scss']
})
export class AddresultComponent implements OnInit {

  dataForm = new FormGroup({
    batch: new FormControl('', Validators.required),
    course: new FormControl('', Validators.required),
    stuId: new FormControl('', Validators.required),
    result: new FormControl('', Validators.required),
    
  });


  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(): void {
    console.log('batch:' + this.dataForm.get('batch').value);
    console.log('course:' + this.dataForm.get('course').value);
    console.log('stuId:' + this.dataForm.get('stuId').value);
    console.log('result:' + this.dataForm.get('result').value);
    
  } 

}
