import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   usuario:Usuario = {email:'msansone@email.com', pass:'123',nome:'', autenticado:false}


  constructor(
    private loginService: LoginService,
    private router:Router
  ){}


  fazerLogin(){

    this.loginService.logar(this.usuario.email,
      this.usuario.pass)

    /*
    this.loginService.logar(this.usuario.email,
      this.usuario.pass).subscribe({
        next: (v)=>{
          this.usuario=v
          this.router.navigate(['/'])
          this.loginService.mostrarMenuEmitter.emit(true)
        },
        error: (e)=> console.log(e),
        complete: () => console.log('Atualizado')

    })
*/
  }

}
