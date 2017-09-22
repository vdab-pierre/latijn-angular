import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { LatijnComponent } from '../latijn/latijn.component';
import { CaputComponent } from '../latijn/caput/caput.component';
import { LatijnWoordenLerenComponent } from '../latijn/latijn-woorden-leren/latijn-woorden-leren.component';
import { AfvragenComponent } from '../latijn/afvragen/afvragen.component';


const appRoutes: Routes = [
  { path: 'latijn', component: LatijnComponent },
  { path: 'latijn/caput/:id', component: CaputComponent },
  { path: 'latijn/woordenleren/:van/:tot', component: LatijnWoordenLerenComponent },
  { path: 'latijn/afvragen/:id', component: AfvragenComponent },
  
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
