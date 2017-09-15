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
      {id:213,caput:caputs[0], term:"appellare",vert:[{id:1,term:"aanspreken"},{id:2,term:"noemen"}],aanvInf:"appelo"},
      {id:214,caput:caputs[0], term:"terrere",vert:[{id:1,term:"schrik aanjagen"}],aanvInf:"terreo"},
      {id:215,caput:caputs[0], term:"pulcher",vert:[{id:1,term:"mooi"}],aanvInf:"pulchra,pulchrum"},
      {id:216,caput:caputs[0],term:"species",vert:[{id:1,term:"uiterlijk"},{id:1,term:"schijn"},{id:1,term:"soort"}],genus:Genus[Genus.v],aanvInf:"speciei"},
      {id:217,caput:caputs[0], term:"descendere",vert:[{id:1,term:"afdalen"}],aanvInf:"descendo"},
      {id:363,caput:caputs[1], term:"invadere",vert:[{id:1,term:"binnendringen"}],aanvInf:"invasi/invado"},
      {id:364,caput:caputs[1], term:"defendere",vert:[{id:1,term:"verdedigen"}],aanvInf:"defendi/defendo"},
    ]
    
    return {caputs,woorden};
  }
}
