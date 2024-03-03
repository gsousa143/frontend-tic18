import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpServicoService } from '../http-servico.service';

@Component({
  selector: 'app-form-atendimento',
  templateUrl: './form-atendimento.component.html',
  styleUrl: './form-atendimento.component.css'
})


export class FormAtendimentoComponent implements OnInit{
  formulario!: FormGroup;


  constructor(private formBuilder: FormBuilder, private http: HttpServicoService) { 
    this.formulario = new FormGroup({});
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(12), Validators.pattern(/^\S*$/)]],
      senha: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^(?=.*[A-Z])(?=.*\W)/)]],
      email: ['', [Validators.required, Validators.email]],
      nome: ['', [Validators.required, Validators.pattern(/^\S+(\s+\S+)+$/)]],
      telefone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\)\d{4,5}-\d{4}$/)]],
      endereco: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required, this.validarDataNascimento]],
      servicos: [[], [Validators.required]],
      valor:[0,[Validators.required]],
      observacoes:['',[]]
    });
  }

  validarDataNascimento(control: AbstractControl) {
    const dataNascimento = new Date(control.value);
    const idade = new Date().getFullYear() - dataNascimento.getFullYear();
    if (idade < 18) {
      return { menorDeIdade: true };
    }
    return null;
  }





  onSubmit() {
    if (this.formulario.valid) {
      console.log('Dados do formulário:');
      this.http.addAtendimento(this.formulario.value);
    }
    else{
      console.log('formulário invalido:');
    }
  }
}


