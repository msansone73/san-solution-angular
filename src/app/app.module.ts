import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { LoginService } from './service/login.service';
import { FormsModule } from '@angular/forms';
import { LoginGuard } from './guard/LoginGuard';
import { SecInterceptor } from './guard/SecInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService,
    LoginGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecInterceptor,
     multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
