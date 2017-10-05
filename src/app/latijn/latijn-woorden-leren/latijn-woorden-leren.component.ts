import { Component, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { Location } from '@angular/common';
//import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Caput } from '..//caput/caput';
import { Woord } from '..//caput/woord';
import { LatijnService } from '../../latijn.service'

@Component({
  selector: 'app-latijn-woorden-leren',
  templateUrl: './latijn-woorden-leren.component.html',
  styleUrls: ['./latijn-woorden-leren.component.css']
})
export class LatijnWoordenLerenComponent implements OnInit {

  alleWoorden: any[];
  selectedWoorden = [];
  selectedWoordVan = null;
  selectedWoordTot = null;
  woordenVan: any[];

  constructor(private _latijnService: LatijnService,
    private _location: Location) { }

  ngOnInit() {
    this._latijnService.getAllWoorden().then((w: any) => this.alleWoorden = w);
  }

  onChange(w): void {
    this.woordenVan = this.alleWoorden.filter(woord => woord.id >= w.id || woord.id <= this.alleWoorden[this.alleWoorden.length - 1]);
  }

  back(): void {
    this._location.back();
  }
}
