import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomPreloadingStrategy } from './custom-preloading-strategy.service';

const routes: Routes = [
  { path:"admin", loadChildren: ()=> import('./admin/admin.module').then(m => m.AdminModule )},
  // { path: "testChild", loadChildren: "./test/test.module", data: {preload: true, delay: 10*1000 }}
  { path: 'test', loadChildren: ()=> import('./test/test.module').then(m => m.TestModule ), data: {preload: true, delay: 10*1000 }},
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