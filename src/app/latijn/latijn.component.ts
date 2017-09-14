import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { LatijnService } from '../latijn.service'
import { Caput } from '../latijn/caput/caput';
import { Woord } from '../latijn/caput/woord';

@Component({
  selector: 'app-latijn',
  templateUrl: './latijn.component.html',
  styleUrls: ['./latijn.component.css'],

})
export class LatijnComponent implements OnInit {
  caputs: Caput[];
  selectedCaput:Caput;
  constructor(private latijnService: LatijnService,private router:Router) { }

  onSelect(caput:Caput):void{
    this.selectedCaput=caput;
    this.router.navigate(['/latijn/caput',this.selectedCaput.id]);
  }

  ngOnInit() {
    this.latijnService.getCaputs().then((caputs:Caput[])=>this.caputs=caputs);
    //console.log(`aantal caputs: ${this.caputs.length}`);
  }

}
