import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-afvragen',
  templateUrl: './afvragen.component.html',
  styleUrls: ['./afvragen.component.css']
})
export class AfvragenComponent implements OnInit {

  constructor(private _location: Location) {
  }

  ngOnInit() {
  }
  back(): void {
    this._location.back();
  }
}
