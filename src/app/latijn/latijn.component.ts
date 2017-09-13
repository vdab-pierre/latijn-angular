import { Component, OnInit } from '@angular/core';
import {CaputService} from '../caput.service'
@Component({
  selector: 'app-latijn',
  templateUrl: './latijn.component.html',
  styleUrls: ['./latijn.component.css'],
  
})
export class LatijnComponent implements OnInit {

  constructor(private caputService:CaputService) { }
  quote:string;
  ngOnInit() {
    this.quote=this.caputService.getCaput();
  }

}
