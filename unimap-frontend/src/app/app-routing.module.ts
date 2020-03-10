import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NewstudentComponent} from './components/newstudent/newstudent.component';


const routes: Routes = [

  { path: '', component: StartComponent },
  {
    path: 'homepage', component: HomepageComponent
    
  },

  {
    path: 'newstudent',
    component:NewstudentComponent ,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
