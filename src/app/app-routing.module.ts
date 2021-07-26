import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomPreloadingStrategy } from './custom-preloading-strategy.service';

const routes: Routes = [
  { path:"admin", loadChildren: ()=> import('./admin/admin.module').then(m => m.AdminModule )},
  { path: "test", loadChildren: "./test/test.module#TestModule", data: {preload: true, delay: 10*1000 }}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, 
      { preloadingStrategy: CustomPreloadingStrategy }
    )
  ],
 exports: [
  RouterModule
 ]
})
export class AppRoutingModule { }