import { Injectable } from '@angular/core';

@Injectable()
export class CaputService {
  getCaput():string{
      return "tis caput";
  }
  getWoorden():string{
    return "woorden";
  }
}
