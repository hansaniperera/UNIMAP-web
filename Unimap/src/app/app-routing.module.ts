import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NewstudentComponent} from './components/newstudent/newstudent.component';
import { UpdatestudentComponent } from './components/updatestudent/updatestudent.component';
import { SearchstuComponent } from './components/searchstu/searchstu.component';
import { AddresultComponent } from './components/addresult/addresult.component';
import { UpdateresComponent } from './components/updateres/updateres.component';
import { ViewresComponent } from './components/viewres/viewres.component';


const routes: Routes = [

  { path: '', component: StartComponent },
  {
    path: 'homepage', component: HomepageComponent
    
  },

  {
    path: 'newstudent',
    component:NewstudentComponent ,
  },

  {
    path: 'updatestudent',
    component:UpdatestudentComponent ,
  },

  {
    path: 'searchstudent',
    component:SearchstuComponent ,
  },

  {
    path: 'addresult',
    component:AddresultComponent ,
  },

  {
    path: 'updateresult',
    component:UpdateresComponent ,
  },

  {
    path: 'viewresult',
    component:ViewresComponent ,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
