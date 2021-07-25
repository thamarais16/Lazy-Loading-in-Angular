import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:"admin", loadChildren: ()=> import('./admin/admin.module').then(m => m.AdminModule )}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
 exports: [
  RouterModule
 ]
})
export class AppRoutingModule { }