import { Injectable } from '@angular/core';
import { CanLoad, Route, Router} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanLoad {

  constructor(
    private router: Router 
  ) { } 

  canLoad(route: Route): boolean{
    let url = route.path;
    if (url=='test') {
      alert('You are not authorised to visit this page');
      return false;
    }  
    return true; 
  }

} 