import { Component, OnInit } from '@angular/core';
import {LatijnService} from '../latijn.service'
@Component({
  selector: 'app-latijn',
  templateUrl: './latijn.component.html',
  styleUrls: ['./latijn.component.css'],
  
})
export class LatijnComponent implements OnInit {

  constructor(private latijnService:LatijnService) { }
  quote:string;
  ngOnInit() {
    this.quote=this.latijnService.getCaput();
  }

}
