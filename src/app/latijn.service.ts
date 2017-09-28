import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Caput } from './latijn/caput/caput'
import { Woord } from './latijn/caput/woord'

@Injectable()
export class LatijnService {
  private caputUrl = 'api/caputs';
  private woordenUrl = "api/woorden";

  constructor(private http: Http) { }

  getCaputs(): Promise<Caput[]> {
    return this.http.get(this.caputUrl)
      .toPromise()
      .then((response: any) => response.json().data as Caput[])
      .catch(this.handleError);
  }
  getAllWoorden(): Promise<Woord> {
    return this.http.get(this.woordenUrl)
      .toPromise()
      .then((response: any) => (response.json().data as Woord[]))
      .catch(this.handleError);
  }
  getWoorden(caput: Caput): Promise<Woord[]> {
    return this.http.get(this.woordenUrl)
      .toPromise()
      .then((response: any) => (response.json().data as Woord[]).filter(woord => woord.caput.id === caput.id))
      .catch(this.handleError);
  }

  getWoordenVanTot(van: number, tot: number): Promise<Woord[]> {
    return this.http.get(this.woordenUrl)
      .toPromise()
      .then((response: any) => (response.json().data as Woord[]).filter(woord => woord.id >= van && woord.id <= tot))
      .catch(this.handleError);
  }

  getCaput(id: number): Promise<Caput> {
    const url = `${this.caputUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Caput)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
