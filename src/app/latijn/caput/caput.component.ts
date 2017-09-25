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
  huidigWoordIndex = 0;
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
  init(): void {
    this.huidigWoordIndex = 0;
    this.leren = false;
  }

  change(): void {
    this.selected = this.selectedWoordTot != null && this.selectedWoordVan != null;
    this.huidigWoordIndex = 0;
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
    
  }

  nextWoord(): void {
    //nog iets voorzien voor als we klaar zijn
    if ((this.huidigWoordIndex + 1) < this.selectedWoorden.length) { this.huidigWoordIndex++ };
  }

 

  checkGenus(genus: string, el: any): void {
    if (genus != "" && genus != this.selectedWoorden[this.huidigWoordIndex].genus) {
      //el.focus();
      el.select();  //el.setSelectionRange(0,el.value.length); in sommige browsers 
      if (!el.classList.contains("fout")) el.classList.add("fout");
      console.log(el.parentNode.className);
      /* console.log(`vertaling: ${vert} nr ${index}`); */
    } else {
      if (el.classList.contains("fout")) el.classList.remove("fout");
    }
  }
  checkVert(index: number, vert: string, el: any): void {
    if (vert != "" && vert != this.selectedWoorden[this.huidigWoordIndex].vert[index].term) {
      //el.focus();
      el.select();  //el.setSelectionRange(0,el.value.length); in sommige browsers 
      if (!el.classList.contains("fout")) el.classList.add("fout");
      console.log(el.parentNode.className);
      /* console.log(`vertaling: ${vert} nr ${index}`); */
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
      /* console.log(`vertaling: ${vert} nr ${index}`); */
    } else {
      if (el.classList.contains("fout")) el.classList.remove("fout");
    }
  }
}