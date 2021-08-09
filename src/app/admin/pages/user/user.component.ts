import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { GithubService }from '../../../core/models/services';
import { Repos }from '../../../core/models/repos';
import { Observable, of , from} from 'rxjs';
import {map, pairwise, shareReplay, startWith} from 'rxjs/operators';
import { UserContentComponent } from '../user-content/user-content.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class UserComponent implements OnInit {

  
  repos: Repos[];
  loading: boolean = false;
  errorMessage: any;
  userName: string;
  //@ViewChild('some') some: ElementRef;
  constructor(
   private github: GithubService
  ) { }

  ngOnInit() {
    //this.getRepo();
  }

  @ViewChild(UserContentComponent)
  set userContent(directive: UserContentComponent){
    this.userName = directive.userName;
  };

  ngAfterViewInit(){
    console.log(this.userName);
    console.log("http://localhost/");
    //this.some.nativeElement.value = 'Whale!';
  }

  getRepo(){
    //alert(this.some.nativeElement.value);
    this.errorMessage = "";
    this.loading = true;
    this.github.getRepos(this.userName).subscribe(
      (value) => {
        console.log(value);
        this.repos = value;
      },
      (error) => {
        console.error('Request failed with error');
        this.errorMessage = error;
        this.loading = false;
      },
      () => {                                   
        console.log('Request completed');
        this.loading = false;
      }
    )

    // const source = of(1, 2, 3, 4).pipe(
    //   startWith(undefined),
    //   pairwise(),
    //   /*map( x => {
    //     debugger;
    //     return `Hello ${x}`;
    //   }),
    //   map( y => {
    //     debugger;
    //     return `${y} of`;
    //   }),
    //   map( z => {
    //     debugger;
    //     return `${z} Rxjs`;
    //   })*/
    // )

    // source.subscribe(([previousValue, currentValue])=> {
    //   console.log(previousValue);
    //   console.log(currentValue);
    // }); 
  }

}