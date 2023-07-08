import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from '../model/usuario.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl= "http://localhost:8080/api/security/login"
  private usuario:Usuario = new Usuario()

  public mostrarMenuEmitter =
    new EventEmitter<boolean>()

  constructor(private httpClient: HttpClient) { }


  logar( email:string, pass:string){

    const oLogar= this.httpClient.post<Usuario>(this.apiUrl,{"email":email,"pass":pass})
    //return oLogar;

    oLogar.subscribe({
      next: (v)=>{
        console.log(v)
        console.log('nome='+v.nome)
      },
      error: (e)=> console.log(e),
      complete: () => console.log('Atualizado')

  })


  }

  getUsuario():Usuario{
    return this.usuario
  }

  getIsLoged():boolean{
    console.log('this.usuario.nome='+this.usuario.nome)
    return this.usuario.nome!=undefined
  }

}
