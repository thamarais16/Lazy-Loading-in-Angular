import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { RightsComponent } from './pages/rights/rights.component';
import { PeopleComponent } from "./pages";

const routes: Routes = [
  /*{
    path:"admin", 
    children: [*/
      { path:"dashboard", component: DashboardComponent },
      { path:"user", component: UserComponent },
      { path:"rights", component: RightsComponent },
      { path:"people", component: PeopleComponent }
    /*]
  }*/
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }