import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
// import { AdminModule } from './admin';
import { SharedModule } from './shared';
import { CoreModule } from './core/models';
import { CustomPreloadingStrategy } from './custom-preloading-strategy.service';
import { AuthGuardService } from './auth-guard.service';
declare var require: any;

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, SharedModule, CoreModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CustomPreloadingStrategy, AuthGuardService] 
})
export class AppModule { } 
