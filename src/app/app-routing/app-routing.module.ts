import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { LatijnComponent } from '../latijn/latijn.component';
import { LatijnWoordenLijstComponent } from '../latijn/latijn-woorden-lijst/latijn-woorden-lijst.component';
import { LatijnWoordenLerenComponent } from '../latijn/latijn-woorden-leren/latijn-woorden-leren.component';
import { AfvragenComponent } from '../latijn/afvragen/afvragen.component';
import { TestRfComponent } from '../test-rf/test-rf.component';


const appRoutes: Routes = [
  { path: 'latijn', component: LatijnComponent },
  { path: 'latijn/woordenlijst', component: LatijnWoordenLijstComponent },
  { path: 'latijn/woordenleren', component: LatijnWoordenLerenComponent },
  { path: 'latijn/woordenafvragen', component: AfvragenComponent },
  { path: 'testRF', component: TestRfComponent },
  
  /*{ path: '**', component: PageNotFoundComponent }*/
];


@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
