import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpServicoService } from '../http-servico.service';
import { Atendimento } from '../atendimento/atendimento.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edita-atendimento',
  templateUrl: './edita-atendimento.component.html',
  styleUrls: ['./edita-atendimento.component.css'] // Corrigido para styleUrls
})
export class EditaAtendimentoComponent implements OnInit{
  formularioEdicao!: FormGroup;
  id: any;
  atendimento!: Atendimento;

  constructor(private formBuilder: FormBuilder, private http:HttpServicoService, private route:ActivatedRoute) {
   }

  ngOnInit(): void {
    this.formularioEdicao = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(12), Validators.pattern(/^\S*$/)]],
      senha: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^(?=.*[A-Z])(?=.*\W)/)]],
      email: ['', [Validators.required, Validators.email]],
      nome: ['', [Validators.required, Validators.pattern(/^\S+(\s+\S+)+$/)]],
      telefone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\)\d{4,5}-\d{4}$/)]],
      endereco: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required, this.validarDataNascimento]],
      servicos: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      observacoes: ['']
    });
    this.route.params.subscribe(params=>{
      this.id = params["id"];
      this.getAtendimento(this.id)
    })
  }

  getAtendimento(id:any){
    this.http.getAtendimento(id).subscribe(atendimento=>{
      this.atendimento = atendimento;;
      this.formularioEdicao.patchValue({
        username: this.atendimento.username,
        senha: this.atendimento.senha,
        email: this.atendimento.email,
        nome: this.atendimento.nome,
        telefone: this.atendimento.telefone,
        endereco: this.atendimento.endereco,
        dataNascimento: this.atendimento.dataNascimento,
        servicos: this.atendimento.servicos,
        valor:this.atendimento.valor,
        observacoes:this.atendimento.observacoes
      });
      
    })
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
    if (this.formularioEdicao.valid) {
      console.log('Dados do formulário:', this.formularioEdicao.value);
      this.http.editarAtendimento(this.id,this.formularioEdicao.value).subscribe(response =>{
        console.log(response);

      });
    } else {
      console.log('Formulário inválido.',this.formularioEdicao.value);
    }
  }
}