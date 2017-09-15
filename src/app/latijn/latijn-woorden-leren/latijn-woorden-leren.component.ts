import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Caput } from '..//caput/caput';
import { Woord } from '..//caput/woord';
import { LatijnService } from '../../latijn.service'
@Component({
  selector: 'app-latijn-woorden-leren',
  templateUrl: './latijn-woorden-leren.component.html',
  styleUrls: ['./latijn-woorden-leren.component.css']
})
export class LatijnWoordenLerenComponent implements OnInit {

  constructor(private _latijnService: LatijnService, private _location: Location) { }
  
  ngOnInit() {
    //this.quote=this.latijnService.getWoorden();
  }
  back(): void {
    this._location.back();
  }
}
