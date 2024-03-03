import { Component, OnInit } from '@angular/core';
import { HttpServicoService } from '../http-servico.service';
import { Atendimento } from '../atendimento/atendimento.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-atendimento',
  templateUrl: './lista-atendimento.component.html',
  styleUrl: './lista-atendimento.component.css'
})
export class ListaAtendimentoComponent implements OnInit{

  atendimentos: Atendimento[] = [];
  detalhesVisiveis: boolean[]= [];

  constructor(private http:HttpServicoService, private router:Router){}

  ngOnInit(): void {
    this.getAtendimentos()
  }

  getAtendimentos(){
    this.http.getAtendimentos().subscribe(atendimentos =>{
      this.atendimentos = atendimentos;
    })
  }

  editaAtendimento(id:any){
    this.router.navigate(["/edita",id]);
  }

  alteraDetalhes(index: number){
    this.detalhesVisiveis[index] = !this.detalhesVisiveis[index];
  }

}
