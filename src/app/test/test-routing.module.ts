import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  { path: "testChild", component: TestComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class TestRoutingModule { }