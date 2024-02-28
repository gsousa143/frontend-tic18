import { Component } from '@angular/core';
import { PetShopService } from '../pet-shop.service';

@Component({
  selector: 'app-listar-atendimento',
  templateUrl: './listar-atendimento.component.html',
  styleUrl: './listar-atendimento.component.css'
})
export class ListarAtendimentoComponent {
  constructor(private servico:PetShopService){}

  listaAtendimento(){
    let atendimentos = this.servico.listAtendimento().subscribe(response => console.log(response));
  }

}
