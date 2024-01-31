import { Component, OnInit } from '@angular/core';
import { ServiceObservableService } from '../service-observable.service';

@Component({
  selector: 'app-component-observable',
  templateUrl: './component-observable.component.html',
  styleUrl: './component-observable.component.css'
})
export class ComponentObservableComponent implements OnInit{
  numeros: number[] = [];
  
  constructor(private servicoNumero: ServiceObservableService){}

  ngOnInit(): void {
    this.servicoNumero.getNumeros().subscribe(
      number => {
        this.numeros.push(number+1);
      }
    );
  }
}
