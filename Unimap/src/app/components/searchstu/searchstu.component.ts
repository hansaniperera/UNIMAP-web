import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-searchstu',
  templateUrl: './searchstu.component.html',
  styleUrls: ['./searchstu.component.scss']
})
export class SearchstuComponent implements OnInit {

  dataForm = new FormGroup({
    batch: new FormControl(''),
    stuId: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

}
