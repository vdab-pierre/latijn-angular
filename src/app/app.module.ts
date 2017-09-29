import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';


import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service'

import {AppRoutingModule} from './app-routing/app-routing.module'
import { AppComponent } from './app.component';
import { LatijnComponent } from './latijn/latijn.component';
import { CaputComponent } from './latijn/caput/caput.component';
import { AfvragenComponent } from './latijn/afvragen/afvragen.component';
import { LatijnWoordenLerenComponent } from './latijn/latijn-woorden-leren/latijn-woorden-leren.component';
import {LatijnService} from './latijn.service';
import { LatijnWoordenLijstComponent } from './latijn/latijn-woorden-lijst/latijn-woorden-lijst.component';

@NgModule({
  declarations: [
    AppComponent,
    LatijnComponent,
    CaputComponent,
    AfvragenComponent,
    LatijnWoordenLerenComponent,
    LatijnWoordenLijstComponent, 
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,AppRoutingModule,HttpModule,InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [LatijnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
