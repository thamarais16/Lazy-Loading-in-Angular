import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
// import { AdminModule } from './admin';
import { SharedModule } from './shared';
import { CustomPreloadingStrategy } from './custom-preloading-strategy.service';
import { AuthGuardService } from './auth-guard.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, SharedModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CustomPreloadingStrategy, AuthGuardService] 
})
export class AppModule { } 
