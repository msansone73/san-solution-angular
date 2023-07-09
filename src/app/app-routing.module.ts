import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { LoginGuard } from './guard/LoginGuard';
import { UsersListComponent } from './view/users/users-list/users-list.component';

const routes: Routes = [
  {path: 'userList', component: UsersListComponent, canActivate: [LoginGuard]},
  {path: 'home', component:HomeComponent, canActivate: [LoginGuard]},
  {path: '', component:HomeComponent, canActivate: [LoginGuard]},
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
