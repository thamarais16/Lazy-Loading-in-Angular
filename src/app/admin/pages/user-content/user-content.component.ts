import { Component, OnInit } from '@angular/core';
import { EmitterService }from '../../../core/models/services';

@Component({
  selector: 'user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.css']
})
export class UserContentComponent implements OnInit {
  
  userName: string = "tektutorialshub";
  
  constructor(
    private emitter: EmitterService
  ) { }

  ngOnInit() {
  }

  valChanged(val: any){
    this.emitter.nameEmit.next(val);
  }
}