import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { RightsComponent } from './pages/rights/rights.component';
import { UserContentComponent } from './pages/user-content/user-content.component';
import { PeopleComponent } from "./pages";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent, 
    UserComponent,
    RightsComponent,
    UserContentComponent,
    PeopleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
})
export class AdminModule { 
  constructor(){
    //alert("admin modulae");
  }
}