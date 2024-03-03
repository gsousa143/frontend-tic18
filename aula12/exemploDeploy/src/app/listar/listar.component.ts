import { Component, OnInit } from '@angular/core';
import { BancoService } from '../banco.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {
  carros: any[] = [];
constructor(private Banco:BancoService){}

ngOnInit(): void{
  this.carros = this.Banco.getCarros();
}
}
