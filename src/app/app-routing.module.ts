import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomPreloadingStrategy } from './custom-preloading-strategy.service';
import {AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  //{ path:"admin", loadChildren: ()=> import('./admin/admin.module').then(m => m.AdminModule ), data: {preload: true, delay: 15 * 1000 }},
  // { path: "testChild", loadChildren: "./test/test.module", data: {preload: true, delay: 10*1000 }}
  //{ path: 'test', loadChildren: ()=> import('./test/test.module').then(m => m.TestModule ), data: {preload: true, delay: 10*1000 }},
  { path:"admin", loadChildren: ()=> import('./admin/admin.module').then(m => m.AdminModule ),data: {preload: true, delay: 3000} },
  { path: 'test', loadChildren: ()=> import('./test/test.module').then(m => m.TestModule ), canLoad:[AuthGuardService], data: {preload: false}  }
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