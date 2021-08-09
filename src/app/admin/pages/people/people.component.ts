import { Component, OnInit } from '@angular/core';
import { PeopleListService }from '../../../core/models/services';
import { Person }from '../../../core/models/person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people: any;

  constructor(
    private list: PeopleListService
  ) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople(){
    this.list.getPeopleList().subscribe(
      (data)=>{ 
        console.log(data)
        this.people = data["people"] 
      } ,
      (error)=>{ 
        console.log(error)
      } ,
    )
  }

} 