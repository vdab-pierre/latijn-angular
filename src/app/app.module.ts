import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing/app-routing.module'

import { AppComponent } from './app.component';
import { LatijnComponent } from './latijn/latijn.component';
import { CaputComponent } from './latijn/caput/caput.component';
import { WoordenLerenComponent } from './latijn/woorden-leren/woorden-leren.component';
import { AfvragenComponent } from './latijn/afvragen/afvragen.component';

@NgModule({
  declarations: [
    AppComponent,
    LatijnComponent,
    CaputComponent,
    WoordenLerenComponent,
    AfvragenComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
