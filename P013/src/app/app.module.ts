import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { FormAtendimentoComponent } from './form-atendimento/form-atendimento.component';
import { ListaAtendimentoComponent } from './lista-atendimento/lista-atendimento.component';



import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EditaAtendimentoComponent } from './edita-atendimento/edita-atendimento.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAtendimentoComponent,
    ListaAtendimentoComponent,
    EditaAtendimentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
