import { Component, OnInit } from '@angular/core';
import { GithubService }from '../../../core/models/services';
import { Repos }from '../../../core/models/repos';
import { Observable, of , from} from 'rxjs';
import {map, pairwise, shareReplay, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userName: string = "tektutorialshub";
  repos: Repos[];
  loading: boolean = false;
  errorMessage: any;

  constructor(
   private github: GithubService
  ) { }

  ngOnInit() {
    //this.getRepo();
  }

  getRepo(){
    this.errorMessage = "";
    this.loading = true;
    // this.github.getRepos(this.userName).subscribe(
    //   (value) => {
    //     console.log(value);
    //     this.repos = value;
    //   },
    //   (error) => {
    //     console.error('Request failed with error');
    //     this.errorMessage = error;
    //     this.loading = false;
    //   },
    //   () => {                                   
    //     console.log('Request completed');
    //     this.loading = false;
    //   }
    // )

    const source = of(1, 2, 3, 4).pipe(
      startWith(undefined),
      pairwise(),
      /*map( x => {
        debugger;
        return `Hello ${x}`;
      }),
      map( y => {
        debugger;
        return `${y} of`;
      }),
      map( z => {
        debugger;
        return `${z} Rxjs`;
      })*/
    )

    source.subscribe(([previousValue, currentValue])=> {
      console.log(previousValue);
      console.log(currentValue);
    }); 
  }

}