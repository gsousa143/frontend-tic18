import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BancoService } from '../banco.service';


@Component({
  selector: 'app-form-adicionar',
  templateUrl: './form-adicionar.component.html',
  styleUrls: ['./form-adicionar.component.css']
})



export class FormAdicionarComponent {

  constructor(private carros:BancoService){}

  onSubmit(formulario: NgForm){
    let{modelo,marca,ano,valor,cor, imagem}=formulario.value;
    let novoCarro = { modelo, marca, ano, valor, cor, imagem };
    this.carros.adicionarCarro(novoCarro);
    console.log(novoCarro);
    formulario.reset();
    
  }
}