import { Component, OnInit } from '@angular/core';
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

  onChangeVan(w): void {
    this.woordenVan = this.alleWoorden.filter(woord => woord.id >= w.id || woord.id <= this.alleWoorden[this.alleWoorden.length - 1]);
  }

  selectWoorden(): void {
    this.selectedWoorden = this.alleWoorden.filter(woord => woord.id >= this.selectedWoordVan.id && woord.id <= this.selectedWoordTot.id);
  }

  leren: boolean = false;
  huidigWoordIndex = 0;

  btnStart(): void {
    this.selectWoorden();
    this.leren = true;
    this.huidigWoordIndex = 0;
  }
  buttonNextText: string = "Next";
  toonResultaat = false;
  nextWoord(el): void {
    //nog iets voorzien voor als op het einde van de reeks zijn
    if ((this.huidigWoordIndex + 1) < this.selectedWoorden.length) {
      this.huidigWoordIndex++;
      console.log(el);
    } else {
      //console.log(`je hebt ${this.aantGeg-this.aantFout} juist ingevuld van de ${this.aantGeg} gegevens.`);
      this.buttonNextText = "Klaar!";
      this.leren = false;
      this.toonResultaat = true;
    };
  }

  back(): void {
    this._location.back();
  }
}
