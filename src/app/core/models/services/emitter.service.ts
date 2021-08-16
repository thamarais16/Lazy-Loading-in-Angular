import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class EmitterService {
  public nameEmit = new BehaviorSubject<any>('');
  
  constructor() {
    
  }


}