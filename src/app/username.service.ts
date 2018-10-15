import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {
username:string='';

  
  add(username:string){
    this.username=username;
    
  }
  
}