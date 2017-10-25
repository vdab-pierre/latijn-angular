import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { Location } from '@angular/common';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
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
  //wordt onInit gevuld
  alleWoorden: any[];
  //wordt in btnStart gevuld
  selectedWoorden = [];
  //bound with the selects of the form, used in selectWoorden
  selectedWoordVan = null;
  selectedWoordTot = null;
  //voor de options van de 2de select 
  woordenVan: any[];

  leren: boolean = false;
  huidigWoordIndex = 0;
  huidigWoord: any;
  btnStartEnabled = true;

  inputs: any[];
  woordForm: FormGroup;
  aantGeg: number;
  aantFout: number;


  toonResultaat = false;

  constructor(private _latijnService: LatijnService,
    private _location: Location, private _fb: FormBuilder) {
  }



  ngOnInit() {
    this._latijnService.getAllWoorden().then((w: any) => this.alleWoorden = w);
  }

  //na kiezen in eerste select, array bouwen voor de options van de 2de select
  onChangeVan(w): void {
    this.woordenVan = this.alleWoorden.filter(woord => woord.id >= w.id || woord.id <= this.alleWoorden[this.alleWoorden.length - 1]);
  }
  //in btnStart, selectedWoorden vullen
  selectWoorden(): void {
    this.selectedWoorden = this.alleWoorden.filter(woord => woord.id >= this.selectedWoordVan.id && woord.id <= this.selectedWoordTot.id);
  }



  btnStart(): void {
    this.selectWoorden();
    this.leren = true;
    this.huidigWoordIndex = 0;

    //clone selectedWoorden in getypt en doe genus, vertalingen en aanv. info = lege string
    this.inputs = this.deepClone(this.selectedWoorden);
    this.blankInputs();

    this.btnStartEnabled = false;

    //maak formulier
    this.createForm();
    //patch values
    this.patch();
  }

  createForm() {
    this.woordForm = this._fb.group({
      genus: ['', [Validators.required]],
      vert: this._fb.array([]),
      aanvInf: this._fb.array([])
    })
  }

  patch() {
    const vertFGs = this.inputs[this.huidigWoordIndex].vert.map(v=>this._fb.group(v));
    const vertFormArray = this._fb.array(vertFGs);
    this.woordForm.setControl('vert',vertFormArray);

    const aanvInfFGs = this.inputs[this.huidigWoordIndex].aanvInf.map(a=>this._fb.group(a));
    const aanvInfFormArray = this._fb.array(aanvInfFGs);
    this.woordForm.setControl('aanvInf',aanvInfFormArray);
  }

  onSubmit(form: FormGroup) {
    console.log('valid?', form.valid);
    //console.log('genus', form.value.genus);
    console.log(form.value);
  }

  deepClone(obj) {

    // return value is input is not an Object or Array.
    if (typeof (obj) !== 'object' || obj === null) {
      return obj;
    }

    let clone;

    if (Array.isArray(obj)) {
      clone = obj.slice();  // unlink Array reference.
    } else {
      clone = Object.assign({}, obj); // Unlink Object reference.
    }

    let keys = Object.keys(clone);

    for (let i = 0; i < keys.length; i++) {
      clone[keys[i]] = this.deepClone(clone[keys[i]]); // recursively unlink reference to nested objects.
    }

    return clone; // return unlinked clone.

  }

  blankInputs() {
    for (var i = 0; i < this.inputs.length; i++) {

      if (this.inputs[i].genus != undefined) this.inputs[i].genus = "";

      for (var j = 0; j < this.inputs[i].vert.length; j++) {
        //console.log('v:',this.inputs[i].vert[j].term)
        this.inputs[i].vert[j].term = "";
      }

      for (var k = 0; k < this.inputs[i].aanvInf.length; k++) {
        //console.log('a:',this.inputs[i].aanvInf[k].term)
        this.inputs[i].aanvInf[k].term = "";
      }

    }

    /*     this.getypt.forEach((w:Woord)=>function(w){
          if(w.genus!=undefined)w.genus="";
          w.vert.forEach(v=>v.term="");
          w.aanvInf.foreach(a=>a.term="");
        }) */
  }
  

  nextWoord(form): void {
    //nog iets voorzien voor als op het einde van de reeks zijn
    if ((this.huidigWoordIndex + 2) === this.selectedWoorden.length) {
      //voorlaatste
      this.huidigWoordIndex++;
      
      console.log(this.huidigWoordIndex);
    } else if (this.huidigWoordIndex + 1 === this.selectedWoorden.length) {
      //laatste
      this.leren = false;
      this.toonResultaat = true;
      console.log(this.huidigWoordIndex);
      //console.log(form);
    } else if (this.huidigWoordIndex + 1 < this.selectedWoorden.length) {
      //anderen id reeks
      console.log(`je hebt ${this.aantGeg - this.aantFout} juist ingevuld van de ${this.aantGeg} gegevens.`);
      this.huidigWoordIndex++;
      console.log(this.huidigWoordIndex);
    }
    console.log(form);
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
