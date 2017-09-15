import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Caput } from './caput'
import { Woord } from './woord';
import { LatijnService } from '../../latijn.service'

@Component({
  selector: 'app-caput',
  templateUrl: './caput.component.html',
  styleUrls: ['./caput.component.css']
})
export class CaputComponent implements OnInit {
  caput: Caput;
  woorden: Woord[];
  constructor(private latijnService: LatijnService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {

    this.route.paramMap
      .switchMap((params: ParamMap) => this.latijnService.getCaput(+params.get('id')))
      .subscribe((c: Caput) => this.caput = c);

      
    this.route.paramMap
      .switchMap((params: ParamMap) => this.latijnService.getCaput(+params.get('id')))
      .subscribe((c: Caput) => this.latijnService.getWoorden(c).then(woorden => this.woorden = woorden));

    //this.latijnService.getWoorden(this.caput).then(woorden => this.woorden = woorden);

  }


}
