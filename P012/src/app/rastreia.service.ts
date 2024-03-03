import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RastreiaService {
  private mudancasSubject: BehaviorSubject<{[key: string]: any}> = new BehaviorSubject({});
  mudancas$ = this.mudancasSubject.asObservable();

  constructor() { }

  rastreiaValor(formulario: FormGroup) {
    formulario.valueChanges.subscribe((valor) => {
      console.log(valor);
      this.mudancasSubject.next({...this.mudancasSubject.value, ...valor});
    });
  }

  rastriaStatus(formulario: FormGroup) {
    formulario.statusChanges.subscribe((status) => {
      console.log(status);
      this.mudancasSubject.next({...this.mudancasSubject.value, status});
    });
  }
}