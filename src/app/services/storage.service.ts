import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }


  public get(item:any) {
    return JSON.parse(localStorage.getItem(item));
  }

  public set(item:any, value:any) {
    localStorage.setItem(item, JSON.stringify(value));
  }

  public has(item:any) {
    return localStorage.getItem(item) !== null;
  }

  public remove(item:any) {
    localStorage.removeItem(item);
  }
}
