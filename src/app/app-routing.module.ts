import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { StudentaccountdetialsComponent } from './studentaccountdetials/studentaccountdetials.component';
import { StudentparentdetialsComponent } from './studentparentdetials/studentparentdetials.component';
import { ObservablesComponent } from './observables/observables.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { BehaviorsubjectComponent } from './behaviorsubject/behaviorsubject.component';
import { MapoperatorComponent } from './mapoperator/mapoperator.component';
import { PluckoperatorComponent } from './pluckoperator/pluckoperator.component';
import { TapoperatorComponent } from './tapoperator/tapoperator.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'observable', component: ObservablesComponent },
  { path: 'subject', component: SubjectsComponent },
  { path: 'behaviorsubject', component: BehaviorsubjectComponent },
  { path: 'mapoperator', component: MapoperatorComponent },
  { path: 'pluckoperator', component: PluckoperatorComponent },
  { path: 'tapoperator', component: TapoperatorComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'aboutus/:id', component: AboutusComponent },
  {
    path: 'student',
    children: [
      { path: '', component: StudentComponent },
      {
        path: 'details',
        children: [
          { path: '', component: StudentdetailsComponent },
          { path: 'accountdetails', component: StudentaccountdetialsComponent },
          { path: 'parentdetails', component: StudentparentdetialsComponent },
        ],
      },
      { path: 'registration', component: StudentregistrationComponent },
    ],
  },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
