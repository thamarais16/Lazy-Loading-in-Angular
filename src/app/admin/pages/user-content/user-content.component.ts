import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.css']
})
export class UserContentComponent implements OnInit {
  
  userName: string = "tektutorialshub";
  
  constructor() { }

  ngOnInit() {
  }

}