import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import {DataService} from './data.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor( private auth:DataService   ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.auth.isLoggedIn){
    return true;
  }
  else{
    return this.auth.isLoggedIn;
  }
}
 
  
}
 