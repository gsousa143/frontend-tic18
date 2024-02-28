import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetShopService implements OnInit{

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
  }

  addAtendimento(atendimentoData:{ 
    nome:string, 
    email:string,
    tipo:string,
    obs:string}){
      return this.http.post('https://petshop-9aa03-default-rtdb.firebaseio.com/petshop.json',atendimentoData);
  }

  listAtendimento(){
      return this.http.get('https://petshop-9aa03-default-rtdb.firebaseio.com/petshop.json',
      {
        params: new HttpParams().set('print', 'pretty')
      }
    );
  }

  editAtendimento(){}

  detalhaAtendimento(){}

}
