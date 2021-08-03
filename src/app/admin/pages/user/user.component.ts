import { Component, OnInit } from '@angular/core';
import { GithubService }from '../../../core/models/services';
import { Repos }from '../../../core/models/repos';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  repos: Repos[];

  constructor(
   private github: GithubService
  ) { }

  ngOnInit() {
    this.getRepos();
  }

  getRepos(){
    this.repos = this.github.getRepos().subscribe(
      (value) => {
        console.log(value);
        this.repos = value;
      },
      (error) => {
        console.error('Request failed with error')
          alert(error);
      },
      () => {                                   
        console.log('Request completed')
      }
    )
  }

}