import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: Item<string, number>[] = [
    {name: 'One', val: 1},
    {name: 'Two', val: 2},
    {name: 'Three', val: 3},
    {name: 'Four', val: 3},
    {name: 'Five', val: 3}
  ];
  selectedValue;

  styles: Styles<string, number> = new Styles();
  styles2: Styles2<string, number> = new Styles2();
  constructor() { }

  ngOnInit() {
  }

}

interface Item<T, U>{
  name: T,
  val: U
}

class Styles<T, U>{
  'background-color':string = '#fff';
  'margin-top.px':number =  10;
  'margin-bottom.px':number =  10;
  'border-style': string = 'dashed dashed dashed solid';
  'border-width': string = '1px 1px 1px 3px';
  'border-color': string = 'green';
  'padding.px': number = 10;
}

class Styles2<T, U>{
  'background-color':string = '#fff';
  'margin-top.px':number =  10;
  'margin-bottom.px':number =  10;
  'border-style': string = 'dashed dashed dashed solid';
  'border-width': string = '1px 1px 1px 3px';
  'border-color': string = 'red';
  'padding.px': number = 10;
}
