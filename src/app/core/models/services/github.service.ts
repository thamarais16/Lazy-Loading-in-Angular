import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Repos } from "../repos";
import { pipe, Observable } from "rxjs";
import {  shareReplay } from 'rxjs/operators';

@Injectable()
export class GithubService {

  userName: string = "tektutorialshub"
  baseURL: string = "https://api.github.com/";

  constructor(
    private http: HttpClient 
  ) { }

  getRepos(): Observable<any>{
    return this.http.get<Repos[]>(this.baseURL + 'users/' + this.userName + '/repos');
  }

} 