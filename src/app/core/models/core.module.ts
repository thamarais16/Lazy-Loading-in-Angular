import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GithubService, PeopleListService, AppInterceptorService }from './services';
import { core } from '@angular/compiler';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: GithubService,
      useClass: GithubService
    },
    {
      provide: PeopleListService,
      useClass: PeopleListService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptorService,
      multi: true
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