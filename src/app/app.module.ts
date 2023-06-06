import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { StudentaccountdetialsComponent } from './studentaccountdetials/studentaccountdetials.component';
import { StudentparentdetialsComponent } from './studentparentdetials/studentparentdetials.component';
import { BookComponent } from './book/book.component';
import { BookdetailsComponent } from './book/bookdetails/bookdetails.component';
import { ObservablesComponent } from './observables/observables.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { BehaviorsubjectComponent } from './behaviorsubject/behaviorsubject.component';
import { MapoperatorComponent } from './mapoperator/mapoperator.component';
import { PluckoperatorComponent } from './pluckoperator/pluckoperator.component';
import { TapoperatorComponent } from './tapoperator/tapoperator.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    AboutusComponent,
    DashboardComponent,
    PagenotfoundComponent,
    StudentComponent,
    StudentdetailsComponent,
    StudentregistrationComponent,
    StudentaccountdetialsComponent,
    StudentparentdetialsComponent,
    BookComponent,
    BookdetailsComponent,
    ObservablesComponent,
    SubjectsComponent,
    BehaviorsubjectComponent,
    MapoperatorComponent,
    PluckoperatorComponent,
    TapoperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
