import{Caput} from './caput';
import{Genus} from '../genus';

export class Woord {
    id:number;
    caput:Caput;
    term:string;
    genus?:Genus;
    vert:string;
    aanvInf:string;
}
