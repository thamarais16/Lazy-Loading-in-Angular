import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
// import { AdminModule } from './admin';
import { SharedModule } from './shared';
import { CustomPreloadingStrategyService } from './custom-preloading-strategy.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, SharedModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CustomPreloadingStrategyService]
})
export class AppModule { } 
