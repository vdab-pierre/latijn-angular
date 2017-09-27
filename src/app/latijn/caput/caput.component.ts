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
  selected: boolean; //selectedWoordTot en selectedWoordVan niet null
  heleCaput: boolean;
  leren: boolean;
  afvragen: boolean;
  aantGeg: number; //aantal genus + vertalingen + aanv. info van de selectedWoorden
  aantFout: number;

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
    this.berekenAantGeg();
  }

  startWoordenLeren(): void {
    this.selectWoorden();
    this.leren = true;

  }

  nextWoord(el): void {
    //nog iets voorzien voor als we klaar zijn
    if ((this.huidigWoordIndex + 1) < this.selectedWoorden.length) {
      this.huidigWoordIndex++;
      console.log(el);
    } else { 
      console.log(`je hebt ${this.aantGeg-this.aantFout} juist ingevuld van de ${this.aantGeg} gegevens.`);
    };
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

  berekenAantGeg(): void {
    var aant = 0;
    this.selectedWoorden.forEach(el => {
      aant += el.genus ? 1 : 0;
      aant += el.vert.length;
      aant += el.aanvInf.length;
    });
    this.aantGeg = aant;
  }
}