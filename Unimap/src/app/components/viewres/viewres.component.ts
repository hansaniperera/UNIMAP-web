import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-viewres',
  templateUrl: './viewres.component.html',
  styleUrls: ['./viewres.component.scss']
})
export class ViewresComponent implements OnInit {

  dataForm = new FormGroup({
    batch: new FormControl(''),
    stuId: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

}
