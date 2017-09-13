import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import {AppRoutingModule} from './app-routing/app-routing.module'
import { AppComponent } from './app.component';
import { LatijnComponent } from './latijn/latijn.component';
import { CaputComponent } from './latijn/caput/caput.component';
import { AfvragenComponent } from './latijn/afvragen/afvragen.component';
import { LatijnWoordenLerenComponent } from './latijn/latijn-woorden-leren/latijn-woorden-leren.component';
import {CaputService} from './caput.service';

@NgModule({
  declarations: [
    AppComponent,
    LatijnComponent,
    CaputComponent,
    
    AfvragenComponent,
    LatijnWoordenLerenComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule,AppRoutingModule,HttpModule
  ],
  providers: [CaputService],
  bootstrap: [AppComponent]
})
export class AppModule { }
