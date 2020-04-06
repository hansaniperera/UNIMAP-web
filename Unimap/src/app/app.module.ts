import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule, MatIcon} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule, MatSelectModule, MatListModule } from "@angular/material";
import { NewstudentComponent } from './components/newstudent/newstudent.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { UpdatestudentComponent } from './components/updatestudent/updatestudent.component';
import { SearchstuComponent } from './components/searchstu/searchstu.component';
import { AddresultComponent } from './components/addresult/addresult.component';
import { UpdateresComponent } from './components/updateres/updateres.component';
import { ViewresComponent } from './components/viewres/viewres.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material';
//import {ReactiveFormsModule} from '@angular/forms';
//import {FlexLayoutModule} from '@angular/flex-layout';




@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    HomepageComponent,
    FooterComponent,
    NewstudentComponent,
    UpdatestudentComponent,
    SearchstuComponent,
    AddresultComponent,
    UpdateresComponent,
    ViewresComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    NgbModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
