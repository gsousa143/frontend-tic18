import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BancoService {
  carros: any[]=[];

  constructor() { }

  adicionarCarro(carro:any){
    this.carros.push(carro);
  }

  getCarros(){
    return this.carros;
  }
}
