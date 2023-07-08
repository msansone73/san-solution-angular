import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class SecInterceptor implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    if (1==1){
      const cloned = req.clone({
         headers: req.headers.set('Content-Type', 'application/json')
        .append('Access-Control-Allow-Origin', '**')
        .append("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS")
        .append("Access-Control-Allow-Headers", "*")
        .append("Access-Control-Allow-Credentials", 'true')
        .append("Access-Control-Max-Age", '1800')
        .append("Authorization", 'Basic ' + window.btoa('admin:Batata'))

      })


    console.log('passei aqui também')
      return next.handle(cloned)

    } else {
      return next.handle(req)
    }


  }

 }
