import { Injectable } from '@angular/core';
import { CONFIG } from '../shared/config';
import { Ration } from '../shared/models/ration';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor() {}

  save(list: Array<Ration>): void {
    localStorage.setItem(CONFIG.localStrorageKey, JSON.stringify(list));
  }

  restore(): Array<Ration> {
    const list = localStorage.getItem(CONFIG.localStrorageKey);
    if (!list) return [];
    return JSON.parse(list);
  }
}
