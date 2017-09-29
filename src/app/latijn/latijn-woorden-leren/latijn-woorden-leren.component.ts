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
  caputs: any[];
  selectionStatusOfCaputs:any={};
  
  //caputForm: FormGroup;

  alleCaputs: boolean;
  selectedCaputs: boolean[];

  constructor(private _latijnService: LatijnService,
    private _location: Location) { }

  ngOnInit() {
    
  }

  onChangeCaput(data) {
    data.checked = !data.checked;
   /*  this.caputForm.controls.caputs.value.filter(x=>x.checked).forEach(element => {
      console.log(element.checked) 
    });*/
  }



  back(): void {
    this._location.back();
  }
}
