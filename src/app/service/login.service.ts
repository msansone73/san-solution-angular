import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from '../model/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //apiUrl= "http://localhost:8080/api/security/login"
  //apiUrl= "https://msansone.com.br/api/security/login"
  apiUrl= environment.apiUrl+"/api/security/login"

  private usuario:Usuario = new Usuario()

  public mostrarMenuEmitter =
    new EventEmitter<boolean>()

  constructor(private httpClient: HttpClient,
    private router:Router) { }


  logar( email:string, pass:string){

    console.log(this.apiUrl)
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
