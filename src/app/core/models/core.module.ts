import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService }from './services';
import { core } from '@angular/compiler';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: GithubService,
      useClass: GithubService
    }
  ]
})
export class CoreModule { 
  constructor(
    @Optional() @SkipSelf() core: CoreModule
  ){
    if(core){
      throw new Error("import core module only in root module");
    }
  }
 }