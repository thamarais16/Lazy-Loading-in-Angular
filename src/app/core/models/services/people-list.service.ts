import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, filter, catchError } from "rxjs/operators";
declare var require: any;
var Net  = require('net');

@Injectable()
export class PeopleListService {
  baseUrl: string = "http://localhost/db.json";
  constructor(
    private httpClient: HttpClient
  ) { } 

  getPeopleList(){
    console.log(this.baseUrl);
    //(A) LOAD DB MODULE
const mysql = require("mysql");

// (B) CREATE CONNECTION - CHANGE TO YOUR OWN !
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'people'
// });
// db.connect((err) => {
//   if (err) { throw err; }
//   console.log("DB connection OK");
// });

// // (C) QUERY
// db.query("SELECT * FROM `person`", function (err, results) {
//   if (err) { throw err; }
//   console.log(results);
// });


    return this.httpClient.get(this.baseUrl);
  }

}