import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { Woord } from '../latijn/caput/woord';
import { Caput } from '../latijn/caput/caput';
import { Vertaling } from '../latijn/caput/vertaling';
import { AanvullendeInfo } from '../latijn/caput/aanvinfo';
import { Genus } from '../latijn/genus'

@Component({
  selector: 'app-test-rf',
  templateUrl: './test-rf.component.html',
  styleUrls: ['./test-rf.component.css']
})
export class TestRfComponent implements OnInit {
  woordForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  woord = { id: 216, caput: { id: 1, naam: 'caput 1' }, term: "species", vert: [{ id: 1, term: "uiterlijk" }, { id: 1, term: "schijn" }, { id: 1, term: "soort" }], genus: Genus[Genus.v], aanvInf: [{ id: 1, term: "speciei" }] };

  leegWoord = { id: 213, caput: { id: 1, naam: 'caput 1' }, term: "", vert: [{ id: 1, term: "" }, { id: 2, term: "" }], aanvInf: [{ id: 1, term: "" }] }

  ngOnInit() {
    this.woordForm = this._fb.group({
      genus: '',
      vert: this._fb.array([]),
      aanvInf: this._fb.array([])
    })
    this.initCtrl();
  }

  initCtrl(){
    const vertFGs = this.leegWoord.vert.map(v=>this._fb.group(v));
    const vertFormArray = this._fb.array(vertFGs);
    this.woordForm.setControl('vert',vertFormArray);

    const aanvInfFGs = this.leegWoord.aanvInf.map(a=>this._fb.group(a));
    const aanvInfFormArray = this._fb.array(aanvInfFGs);
    this.woordForm.setControl('aanvInf',aanvInfFormArray);  
  }
 
  onSubmit(form: FormGroup) {
    console.log('valid?', form.valid);
    console.log('genus', form.value.genus);
    console.log(form.value);
  }

}

