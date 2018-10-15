import { Component } from '@angular/core';

import{ UsernameService} from "./username.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  hide1=true;
  
 
  
constructor(public usernameservice:UsernameService){   }

hide(){
  
  this.hide1=false;
}
}