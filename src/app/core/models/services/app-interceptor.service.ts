import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptorService implements  HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>>{
    console.log("In interceptor service");
    
    // req = req.clone(
    //   {
    //     setHeaders:{ 
    //       "Content-Type":"application/json"
    //     }
    //   }
    // );

    req = req.clone(
      {
        headers: req.headers.set("Content-Type","application/json")
      }
    )

    if(req.headers.has('Access-Control-Allow-Origin') == false){
      req = req.clone(
        {
          headers: req.headers.append('Access-Control-Allow-Origin', 'x-www-form-urlencoded')
        }
      );
    }

    console.log(req.headers);

    return next.handle(req);
  }

}