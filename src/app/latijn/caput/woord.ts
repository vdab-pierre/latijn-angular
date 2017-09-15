import{Caput} from './caput';
import{Genus} from '../genus';
import {Vertaling} from './vertaling'

export class Woord {
    id:number;
    caput:Caput;
    term:string;
    genus?:Genus;
    vert:Vertaling[];
    aanvInf:string;
}
