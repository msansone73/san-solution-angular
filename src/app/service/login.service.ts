import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from '../model/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl= "http://localhost:8080/api/security/login"
  private usuario:Usuario = new Usuario()

  public mostrarMenuEmitter =
    new EventEmitter<boolean>()

  constructor(private httpClient: HttpClient,
    private router:Router) { }


  logar( email:string, pass:string){

    const oLogar= this.httpClient.post<Usuario>(this.apiUrl,{"email":email,"pass":pass})
    //return oLogar;

    oLogar.subscribe({
      next: (u)=>{
        this.usuario=u
        this.mostrarMenuEmitter.emit(true)
        this.router.navigate(['/'])
      },
      error: (e)=> console.log(e),
      complete: () => console.log('Atualizado')

  })

  }

  getUsuario():Usuario{
    return this.usuario
  }

  setUsuario(u:Usuario){
    this.usuario=u
  }

  getIsLoged():boolean{
    console.log('this.usuario.nome='+this.usuario.name)
    return this.usuario.name!=undefined
  }

}
