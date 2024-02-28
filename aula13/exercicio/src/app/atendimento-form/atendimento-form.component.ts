import { Component } from '@angular/core';
import { PetShopService } from '../pet-shop.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-atendimento-form',
  templateUrl: './atendimento-form.component.html',
  styleUrl: './atendimento-form.component.css'
})

export class AtendimentoFormComponent {
  constructor(private servico:PetShopService){}

  onSubmit(formulario:NgForm){
    console.log(formulario.value);
    this.servico.addAtendimento(formulario.value).subscribe( responseData => {
        console.log(responseData);}
      );
  }
}
