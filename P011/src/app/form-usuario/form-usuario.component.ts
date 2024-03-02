import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(12), Validators.pattern(/^\S*$/)]],
      senha: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^(?=.*[A-Z])(?=.*\W)/)]],
      email: ['', [Validators.required, Validators.email]],
      nome: ['', [Validators.required, Validators.pattern(/^\S+(\s+\S+)+$/)]],
      telefone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\)\d{4,5}-\d{4}$/)]],
      endereco: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required, this.validarDataNascimento]],
      genero: ['', [Validators.required]],
      profissao: ['', [Validators.required]]
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
      console.log('Dados do formulário:', this.formulario.value);
    } else {
      console.error('Formulário inválido');
      Object.keys(this.formulario.controls).forEach(field => {
        const control = this.formulario.get(field);
        if (control && control.invalid) {
          const errors = control.errors as {[key: string]: any};
          Object.keys(errors).forEach(keyError => {
            console.error('Campo:', field, 'Erro:', keyError);
          });
        }
      });
    }
  }
  
}
