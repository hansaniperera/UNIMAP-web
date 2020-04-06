import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public addNew(){
    this.router.navigate(['/newstudent']);

  }

  public updateStu(){
    this.router.navigate(['/updatestudent']);

  }

  public searchStu(){
    this.router.navigate(['/searchstudent']);

  }

  public addRes(){
    this.router.navigate(['/addresult']);

  }

  public updateRes(){
    this.router.navigate(['/updateresult']);

  }

  public viewRes(){
    this.router.navigate(['/viewresult']);

  }

}
