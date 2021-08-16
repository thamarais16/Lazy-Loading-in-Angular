import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import {  tap, map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

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

    req = req.clone(
      {
        url: "https://apithub.com/" + req.url
      }
    )

    console.log(req.headers);

    return next.handle(req).pipe(
      tap(event => {
        if(event instanceof HttpResponse){
          console.log("response received");
        }
      }),
      map(obj => {
        const body = [{
          id: '1',
          html_url: 'thams.com',
          description: 'des',
          name: 'thamo'
        }]
        if(obj instanceof HttpResponse){
          console.log("response im map");
          obj = obj.clone({body: body})
        }
        return obj;
      }),
      catchError(err => {
        if(err instanceof HttpErrorResponse){
          console.log("response im error");
        }
        throw new Error("401 err0r");
      })
    )
    
  }

}