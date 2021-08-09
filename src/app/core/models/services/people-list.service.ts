import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, filter, catchError } from "rxjs/operators";

@Injectable()
export class PeopleListService {
  baseUrl: string = "http://localhost:80/db.json";
  constructor(
    private httpClient: HttpClient
  ) { } 

  getPeopleList(): Observable<any>{
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json').set('mode','opaque').set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    return this.httpClient.get(this.baseUrl, {headers});
  }

}