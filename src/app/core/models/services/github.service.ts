import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Repos } from "../repos";
import { Observable, throwError } from "rxjs";
import {  map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class GithubService {

  //userName: string = "tektutorialshub"
  //baseURL: string = "https://api.github.com/"; 

  constructor(
    private http: HttpClient
  ) { }

  getRepos(userName: string): Observable<any>{

    let params = new HttpParams({fromObject: {'page':'2', 'sort': 'name'}}); 
    // .set('page', '1')
    // .append('page', '2')
    // .set('sort', 'name')
    // .set('sort', 'description')
     
    // params = params.delete('page');
    // params = params.delete('sort');
    // console.log(params.toString());
    // let headers = new HttpHeaders()
    // .set('content-type', 'application/json')
    // .set('Access-control-allow-origin', '*')
    // headers = headers.delete('content-type');
    // console.log(headers.keys())

    return this.http.get( 'users/' + userName + '/repos').pipe(
      tap(val=> console.log(val)),
    )
  }

} 