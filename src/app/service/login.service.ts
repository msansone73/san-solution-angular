import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from '../model/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl= environment.apiUrl

  private usuario:Usuario = new Usuario()

  public mostrarMenuEmitter =
    new EventEmitter<boolean>()

  constructor(private httpClient: HttpClient,
    private router:Router) { }


  logar( email:string, pass:string){

    console.log(this.apiUrl)
    const oLogar= this.httpClient.post<Usuario>(this.apiUrl+"/api/security/login",{"email":email,"pass":pass})

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

  getAllUsers():Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(this.apiUrl+"/api/security")
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
