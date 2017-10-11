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
  aantGeg: number;
  aantFout: number;
  alleWoorden: any[];
  selectedWoorden = [];
  selectedWoordVan = null;
  selectedWoordTot = null;
  woordenVan: any[];
  getypt:any[];

  constructor(private _latijnService: LatijnService,
    private _location: Location) {
  }

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
  btnStartEnabled = true;

  btnStart(): void {
    this.selectWoorden();
    this.getypt=this.selectedWoorden.slice();
    this.leren = true;
    this.huidigWoordIndex = 0;
    this.btnStartEnabled = false;
  }
  buttonNextText: string = "Next";
  toonResultaat = false;
  nextWoord(form): void {
    //nog iets voorzien voor als op het einde van de reeks zijn
    if ((this.huidigWoordIndex + 2) === this.selectedWoorden.length) {
      //voorlaatste
      this.huidigWoordIndex++;
      this.buttonNextText = "Klaar!";
      console.log(this.huidigWoordIndex);
    } else if (this.huidigWoordIndex + 1 === this.selectedWoorden.length) {
      //laatste
      this.leren = false;
      this.toonResultaat = true;
      console.log(this.huidigWoordIndex);
      console.log(form);
    } else if (this.huidigWoordIndex + 1 < this.selectedWoorden.length) {
      //anderen id reeks
      console.log(`je hebt ${this.aantGeg - this.aantFout} juist ingevuld van de ${this.aantGeg} gegevens.`);
      this.huidigWoordIndex++;
      console.log(this.huidigWoordIndex);
    }
  }

  checkGenus(genus: string, el: any): void {
    if (genus != "" && genus != this.selectedWoorden[this.huidigWoordIndex].genus) {
      //el.focus();
      el.select();  //el.setSelectionRange(0,el.value.length); in sommige browsers 
      if (!el.classList.contains("fout")) el.classList.add("fout");
      this.aantFout += 1;
    } else {
      if (el.classList.contains("fout")) el.classList.remove("fout");
    }
  }
  checkVert(index: number, vert: string, el: any): void {
    if (vert != "" && vert != this.selectedWoorden[this.huidigWoordIndex].vert[index].term) {
      //el.focus();
      el.select();  //el.setSelectionRange(0,el.value.length); in sommige browsers 
      if (!el.classList.contains("fout")) el.classList.add("fout");
      this.aantFout += 1;
    } else {
      if (el.classList.contains("fout")) el.classList.remove("fout");
    }
  }
  checkAanvInf(index: number, aanvInf: string, el: any): void {
    if (aanvInf != "" && aanvInf != this.selectedWoorden[this.huidigWoordIndex].aanvInf[index].term) {
      //el.focus();
      el.select();  //el.setSelectionRange(0,el.value.length); in sommige browsers 
      if (!el.classList.contains("fout")) el.classList.add("fout");
      console.log(el.parentNode.className);
      this.aantFout += 1;
    } else {
      if (el.classList.contains("fout")) el.classList.remove("fout");
    }
  }

  back(): void {
    this._location.back();
  }
}
