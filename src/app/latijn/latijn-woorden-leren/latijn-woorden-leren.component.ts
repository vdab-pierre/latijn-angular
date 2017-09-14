import { Component, OnInit } from '@angular/core';
import { LatijnService } from '../../latijn.service'
@Component({
  selector: 'app-latijn-woorden-leren',
  templateUrl: './latijn-woorden-leren.component.html',
  styleUrls: ['./latijn-woorden-leren.component.css']
})
export class LatijnWoordenLerenComponent implements OnInit {

  constructor(private latijnService: LatijnService) { }
  quote: string;
  ngOnInit() {
    //this.quote=this.latijnService.getWoorden();
  }

}
