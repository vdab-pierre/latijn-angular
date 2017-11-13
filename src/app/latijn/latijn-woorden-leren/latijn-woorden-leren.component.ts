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
  //div om de woorden te selecteren al dan niet selecteren
  selectDivEnabled = true;

  //leren div weergeven of niet
  leren: boolean = false;
  //index van het huidige woord in de selectedWoorden array
  huidigWoordIndex = 0;

  //een clone van selectedWoorden maar leeg
  inputs: any[];
  woordForm: FormGroup;

  //resultaat div
  toonResultaat = false;

  //aantal niet ingevulden vakken
  aantalBlanks: number = 0;
  //resultaat alnaargelang of niet ingevulden vakken zijn
  resultaatBericht: string;

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

    this.selectDivEnabled = false;

    //maak formulier
    this.createForm();
    //formulier arrays vullen
    this.patch();
  }

  createForm() {
    this.woordForm = this._fb.group({
      genus: ["", [Validators.required]],
      vert: this._fb.array([]),
      aanvInf: this._fb.array([])
    })
  }

  patch() {
    const vertFGs = this.inputs[this.huidigWoordIndex].vert.map(v => this._fb.group(v));
    const vertFormArray = this._fb.array(vertFGs);
    this.woordForm.setControl('vert', vertFormArray);

    const aanvInfFGs = this.inputs[this.huidigWoordIndex].aanvInf.map(a => this._fb.group(a));
    const aanvInfFormArray = this._fb.array(aanvInfFGs);
    this.woordForm.setControl('aanvInf', aanvInfFormArray);
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
        this.inputs[i].vert[j].term = "";
      }

      for (var k = 0; k < this.inputs[i].aanvInf.length; k++) {
        this.inputs[i].aanvInf[k].term = "";
      }

    }
  }


  onSubmitNextWoord(form): void {

    if (this.huidigWoordIndex + 1 < this.selectedWoorden.length) {
      //in de reeks
      this.countBlanks(form,this.huidigWoordIndex);
      this.huidigWoordIndex++;

    } else if ((this.huidigWoordIndex + 2) === this.selectedWoorden.length) {
      //voorlaatste
      this.countBlanks(form,this.huidigWoordIndex);
      this.huidigWoordIndex++;
    } else if (this.huidigWoordIndex + 1 === this.selectedWoorden.length) {
      //laatste
      this.leren = false;
      //resultaat berekenen
      this.countBlanks(form,this.huidigWoordIndex);
      //resultaat tonen
      this.showResult();
    }
    //de arrays in de form opnieuw definiëren adh van het huidige woord (huidigWoordIndex)
    this.patch();
  }

  countBlanks(form,i) {
    var blanks: number = 0;
    var dees = this;
    Object.keys(form.value).map(function (key) {
      if (typeof form.value[key] === "object" && (form.value[key] != null)) {
        form.value[key].forEach(el => {
          if (el.term === "") {
            blanks += 1;
          };
        });
      }else if(key==="genus" && dees.selectedWoorden[i].genus != null){
        blanks+=1;
      }
    });
    this.aantalBlanks += blanks;
  }

  showResult() {
    this.toonResultaat = true;
    if (this.aantalBlanks > 0) {
      this.resultaatBericht = `Pas op. Je hebt ${this.aantalBlanks} antwoord(en) niet ingevuld.`;
    } else {
      this.resultaatBericht = `Goed gedaan.`;
    }
    //reset waarde na het tonen van de results
    this.aantalBlanks=0;
  }

  checkGenus(genus: string, el: any): void {
    if (genus != "" && genus != this.selectedWoorden[this.huidigWoordIndex].genus) {
      el.select();  //el.setSelectionRange(0,el.value.length); in sommige browsers 
      if (!el.classList.contains("fout")) el.classList.add("fout");
    } else {
      if (el.classList.contains("fout")) el.classList.remove("fout");
    }
  }

  checkVert(index: number, vert: string, el: any): void {
    if (vert != "" && vert != this.selectedWoorden[this.huidigWoordIndex].vert[index].term) {
      el.select();  //el.setSelectionRange(0,el.value.length); in sommige browsers 
      if (!el.classList.contains("fout")) el.classList.add("fout");
    } else {
      if (el.classList.contains("fout")) el.classList.remove("fout");
    }
  }

  checkAanvInf(index: number, aanvInf: string, el: any): void {
    if (aanvInf != "" && aanvInf != this.selectedWoorden[this.huidigWoordIndex].aanvInf[index].term) {
      el.select();  //el.setSelectionRange(0,el.value.length); in sommige browsers 
      if (!el.classList.contains("fout")) el.classList.add("fout");
    } else {
      if (el.classList.contains("fout")) el.classList.remove("fout");
    }
  }
  opnieuwWoordenLeren() {
    this.selectDivEnabled = true;
    this.toonResultaat = false;
  }
}
