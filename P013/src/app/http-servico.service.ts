import { Injectable, OnInit } from '@angular/core';
import { Atendimento } from './atendimento/atendimento.module';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpServicoService implements OnInit{
  link: string = 'https://petshop-9aa03-default-rtdb.firebaseio.com'
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    
  }

  addAtendimento(atendimento:Atendimento){
    this.http.post(this.link+"/petshop.json",atendimento).subscribe(response =>{
      console.log(response);
    })
  }

  getAtendimentos() {
    return this.http.get< {[key:string]: Atendimento}>(this.link+"/petshop.json",
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

  getAtendimento(id:string){
    return this.http.get<Atendimento>(this.link+"/petshop/"+id+".json");
  }



  editarAtendimento(id:string, atendimento:{username: string;
    senha: string;
    email: string;
    nome: string;
    telefone: string;
    endereco: string;
    dataNascimento: Date;
    servicos: string[];
    valor: number;
    observacoes: string;
  }){
    console.log("editarAtendimento",atendimento)
    return this.http.put(this.link+"/petshop/"+id+".json", atendimento, {observe: 'response'});
  }
}
