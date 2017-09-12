import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { LatijnComponent } from '../latijn/latijn.component';
import { CaputComponent } from '../latijn/caput/caput.component';
import { WoordenLerenComponent } from '../latijn/woorden-leren/woorden-leren.component';
import { AfvragenComponent } from '../latijn/afvragen/afvragen.component';


const appRoutes: Routes = [
  { path: 'latijn', component: LatijnComponent },
  { path: 'latijn/caput/:id', component: CaputComponent },
  { path: 'latijn/leren', component: WoordenLerenComponent },
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
