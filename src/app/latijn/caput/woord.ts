import{Caput} from './caput';
import{Genus} from '../genus';
import {Vertaling} from './vertaling'
import {AanvullendeInfo} from './aanvinfo'

export class Woord {
    id:number;
    caput:Caput;
    term:string;
    genus?:Genus;
    vert:Vertaling[];
    aanvInf:AanvullendeInfo[];
}
