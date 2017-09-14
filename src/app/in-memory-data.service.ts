import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Caput} from './latijn/caput/caput';
import {Woord} from './latijn/caput/woord';
import{Genus} from './latijn/genus';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const caputs=[
      {"id":1,"naam":"Caput 1"},
      {"id":2,"naam":"Caput 2"}
    ];

    const woorden=[
      {id:213,caput:caputs[0], term:"appellare",vert:"aanspreken,noemen",opm:"appelo"},
      {id:214,caput:caputs[0], term:"terrere",vert:"schrik aanjagen",opm:"terreo"},
      {id:215,caput:caputs[0], term:"pulcher",vert:"mooi",opm:"pulchra,pulchrum"},
      {id:216,caput:caputs[0],term:"species",vert:"uiterlijk,schijn,soort",genus:Genus[Genus.v],opm:"speciei"},
      {id:217,caput:caputs[0], term:"descendere",vert:"afdalen",opm:"descendo"},
      {id:363,caput:caputs[1], term:"invadere",vert:"binnendringen",opm:"invasi/invado"},
      {id:364,caput:caputs[1], term:"defendere",vert:"verdedigen",opm:"defendi/defendo"},
    ]
    
    return {caputs,woorden};
  }
}
