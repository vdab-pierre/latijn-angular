import { Injectable } from '@angular/core';

@Injectable()
export class LatijnService {
  getCaput():string{
      return "tis caput";
  }
  getWoorden():string{
    return "woorden";
  }
}
