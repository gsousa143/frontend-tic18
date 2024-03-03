import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FormAtendimentoComponent } from './form-atendimento/form-atendimento.component';
import { ListaAtendimentoComponent } from './lista-atendimento/lista-atendimento.component';
import { EditaAtendimentoComponent } from './edita-atendimento/edita-atendimento.component';

const routes: Routes = [
  {path: "listar", component: ListaAtendimentoComponent},
  {path: "cadastro",component: FormAtendimentoComponent},
  {path: "edita/:id", component:EditaAtendimentoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
