import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtendimentoFormComponent } from './atendimento-form/atendimento-form.component';
import { ListarAtendimentoComponent } from './listar-atendimento/listar-atendimento.component';

@NgModule({
  declarations: [
    AppComponent,
    AtendimentoFormComponent,
    ListarAtendimentoComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
