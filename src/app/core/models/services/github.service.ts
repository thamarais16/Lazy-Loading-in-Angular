import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Repos } from "../repos";
import { Observable, throwError } from "rxjs";
import {  map, catchError } from 'rxjs/operators';

@Injectable()
export class GithubService {

  //userName: string = "tektutorialshub"
  baseURL: string = "https://api.github.com/"; 

  constructor(
    private http: HttpClient
  ) { }

  getRepos(userName: string): Observable<any>{
    const header = new HttpHeaders()
    .set('Content-Type', 'application/json');

    const param = new HttpParams()
    .set('sort', 'description')
    .set('page', '2');

    return this.http.get(this.baseURL + 'users/' + userName + '/repos' , {headers: header, params: param, withCredentials: true, observe: 'body', reportProgress: true}).pipe(
      map((element)=>{
        return element;
      }),
      catchError((error)=>{
        throw error;
      })
    );
  }

} 