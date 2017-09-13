import { Component, OnInit } from '@angular/core';
import { CaputService } from '../../caput.service'
@Component({
  selector: 'app-latijn-woorden-leren',
  templateUrl: './latijn-woorden-leren.component.html',
  styleUrls: ['./latijn-woorden-leren.component.css']
})
export class LatijnWoordenLerenComponent implements OnInit {

  constructor(private caputService: CaputService) { }
  quote: string;
  ngOnInit() {
    this.quote=this.caputService.getWoorden();
  }

}
