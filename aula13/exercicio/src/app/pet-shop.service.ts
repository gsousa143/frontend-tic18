import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Atendimento } from './atendimento/atendimento.module';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PetShopService implements OnInit{


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
  }

  addAtendimento(atendimentoData:Atendimento){
      return this.http.post('https://petshop-9aa03-default-rtdb.firebaseio.com/petshop.json',atendimentoData);
  }


  getAtendimentos() {
    return this.http.get< {[key:string]: Atendimento}>('https://petshop-9aa03-default-rtdb.firebaseio.com/petshop.json',
      {
        params: new HttpParams().set('print', 'pretty')
      }
    )
    .pipe(
      map( (responseData) => {
        const postArray:Atendimento[] = [];
        for (const key in responseData) {
            if ((responseData).hasOwnProperty(key)){
              postArray.push({...(responseData as any)[key], id: key});
            }
        }
        return postArray;
      }
      )
    );
  }

  editAtendimento(id:string, antendimentoData:Atendimento){
    return this.http.put('https://petshop-9aa03-default-rtdb.firebaseio.com/petshop/'+id+'.json',antendimentoData, {observe: "response"});
  }


  deleteAtendimento(id:string){
    return this.http.delete('https://petshop-9aa03-default-rtdb.firebaseio.com/petshop/'+id+'.json');
  }

}
