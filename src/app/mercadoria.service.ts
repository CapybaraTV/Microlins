import { Injectable } from '@angular/core';
import { ListaMerc } from './base-merc';
import { Mercadoria } from './mercadoria';

@Injectable({
  providedIn: `root`
})
export class MercadoriaService {

  constructor() { }
  getMercadorias(): Mercadoria[] {
    return ListaMerc;
  }

}