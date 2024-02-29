import { Component} from '@angular/core';
import { PetShopService } from '../pet-shop.service';
import { Atendimento } from '../atendimento/atendimento.module';

@Component({
  selector: 'app-listar-atendimento',
  templateUrl: './listar-atendimento.component.html',
  styleUrl: './listar-atendimento.component.css'
})
export class ListarAtendimentoComponent{
  atendimentos: any[] = [];
  mostrarDetalhes: boolean = false;
  indiceAtendimento:number = -1;

  constructor(private servico:PetShopService){}


  listaAtendimento(){
    this.servico.getAtendimentos().subscribe(atendimentosArray => {
      this.atendimentos = atendimentosArray;
    });
  }

  mostrarDetalhesAtendimento(indice:number){
    this.mostrarDetalhes = true;
    this.indiceAtendimento = indice;
  }

  apagaAtendimento(id:string){
    this.servico.deleteAtendimento(id).subscribe(()=>{
      this.atendimentos = this.atendimentos.filter(atendimento => atendimento.id !== id);
    });
  }

}
