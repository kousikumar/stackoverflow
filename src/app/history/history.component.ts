import { Component, OnInit } from '@angular/core';

import { DataService } from "../data.service";
import { QData } from "../qdata";
import{ UsernameService} from "../username.service";
import {  Router } from '@angular/router';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
qdata:QData[];
display="none"
  constructor(private router:Router,private dataservice: DataService,public usernameservice:UsernameService) {
 
   }

  ngOnInit() {
    this.getquestiondata();
    
  }
  response(){
    if(!this.usernameservice.username){
      this.display='block';
    }
    else{
      this.router.navigate(['ques-blog']); 
    }
  }

  onCloseHandled() {
    this.display = "none";
  }
  getquestiondata():void{
    this.dataservice.getqData().subscribe(qdata =>(this.qdata=qdata));
  }
  Logout(){
    this.router.navigate(['firstpage']); 
    this. dataservice.setLoggedIn(false);
    this.usernameservice.username='';
  }
}
