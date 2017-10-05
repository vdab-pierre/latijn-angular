/* 
lijst van caputs weegeven boven tabel van alle woorden
bij keuze caput, tabel filteren op gekozen caput

caputs
caput
woorden

*/
import { Component, OnInit } from '@angular/core';

import { Caput } from '../caput/caput'
import { Woord } from '../caput/woord';
import { LatijnService } from '../../latijn.service'

@Component({
  selector: 'app-latijn-woorden-lijst',
  templateUrl: './latijn-woorden-lijst.component.html',
  styleUrls: ['./latijn-woorden-lijst.component.css']
})
export class LatijnWoordenLijstComponent implements OnInit {

  caput: any;
  caputs: any[];
  woorden: any[];
  alleWoorden: any[];

  constructor(private _latijnService: LatijnService) { }

  ngOnInit() {
    this._latijnService.getAllCaputs().then(c => this.caputs = c);
    this._latijnService.getAllWoorden().then((w: any) => this.woorden = w);
  }

  filterWoorden(i: number): void {
    if (!this.alleWoorden) { this.alleWoorden = this.woorden };
    this.woorden = this.alleWoorden.filter(w => w.caput.id === i + 1);
  }

  geefAlleWoorden():void{
    this.woorden=this.alleWoorden;
  }
}
