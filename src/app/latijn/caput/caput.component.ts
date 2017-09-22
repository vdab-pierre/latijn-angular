import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Caput } from './caput'
import { Woord } from './woord';
import { LatijnService } from '../../latijn.service'

@Component({
  selector: 'app-caput',
  templateUrl: './caput.component.html',
  styleUrls: ['./caput.component.css']
})
export class CaputComponent implements OnInit {
  caput: any;
  woorden: any[];

  selectedWoordVan = null;
  selectedWoordTot = null;
  selectedWoorden: any[];
  huidigWoordIndex = null;
  selected: boolean;
  heleCaput: boolean;
  leren: boolean;
  afvragen: boolean;


  constructor(private latijnService: LatijnService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {

    this.route.paramMap
      .switchMap((params: ParamMap) => this.latijnService.getCaput(+params.get('id')))
      .subscribe((c: Caput) => this.caput = c);


    this.route.paramMap
      .switchMap((params: ParamMap) => this.latijnService.getCaput(+params.get('id')))
      .subscribe((c: Caput) => this.latijnService.getWoorden(c).then(woorden => this.woorden = woorden));

    //this.latijnService.getWoorden(this.caput).then(woorden => this.woorden = woorden);

  }

  change(): void {
    this.selected = this.selectedWoordTot != null && this.selectedWoordVan != null;
    console.log(this.selected);
  }

  log(): void {
    if (this.selectedWoordVan && this.selectedWoordTot) {
      console.log(this.selectedWoordVan.id);
      console.log(this.selectedWoordTot.id);
    }
  }

  selectWoorden(): void {
    //no need to go to the service for this, we already have all the woords of the caput
    /* this.latijnService.getWoordenVanTot(this.selectedWoordVan.id, this.selectedWoordTot.id)
    .then(w=>this.selectedWoorden=w)
    .then(w=>console.log(this.selectedWoorden.length)); */
    if (!this.heleCaput) {
      var van = this.selectedWoordVan.id;
      var tot = this.selectedWoordTot.id;
      this.selectedWoorden = this.woorden.filter(woord => woord.id >= van && woord.id <= tot);
    }
    else {
      this.selectedWoorden = this.woorden;
    }
    console.log(this.selectedWoorden.length)
  }

  startWoordenLeren(): void {
    this.selectWoorden();
    this.leren = true;
    this.huidigWoordIndex = 0;
    this.leerWoord();
  }

  leerWoord():void{
    
  }
}
