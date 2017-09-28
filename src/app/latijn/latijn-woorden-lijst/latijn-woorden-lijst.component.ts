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

  constructor(private latijnService: LatijnService) { }

  ngOnInit() {
    this.latijnService.getCaputs().then(c => this.caputs = c);
    this.latijnService.getAllWoorden().then((w: any) => this.alleWoorden = w).then(w=>console.log(this.alleWoorden.length));
    this.woorden = this.alleWoorden;
  }

  filterWoorden(i: number): void {
    this.woorden.filter(w => w.caput.id === i + 1);
  }
}
