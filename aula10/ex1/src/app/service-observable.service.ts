import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import {take} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})

export class ServiceObservableService {
  constructor() { }

  getNumeros(): Observable<number>{
    return interval(1000).pipe(take(100));
  }
}
