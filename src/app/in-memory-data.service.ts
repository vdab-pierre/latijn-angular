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
      {id:1,caput:caputs[0], term:"abesse",vert:"afwezig zijn"},
      {id:1,caput:caputs[1],term:"servus",vert:"slaaf",genus:Genus.m}
    ]
    console.log(`aantal caputs: ${caputs.length}, aantal woorden: ${woorden.length}`);
    return {caputs,woorden};
  }
}
