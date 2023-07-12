import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usuarios: Usuario[] = []

  constructor (
    private loginService: LoginService
  ){}
  ngOnInit(): void {
    this.loginService.getAllUsers()
    .subscribe(
      data  => this.usuarios=data
    )  }


}
