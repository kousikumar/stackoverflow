import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { QData } from "../qdata";
import{Views} from "../views";
import{ UsernameService} from "../username.service";
import {  Router } from '@angular/router';
@Component({
  selector: "app-top-ques",
  templateUrl: "./top-ques.component.html",
  styleUrls: ["./top-ques.component.css"]
})
export class TopQuesComponent implements OnInit {
  qdata: QData[];
  qdata1:QData;
 
  display = "none";
  today = new Date();
  date = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
   time = this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
  constructor(private dataservice: DataService,public usernameservice:UsernameService,private router:Router) {}
  ngOnInit() {
    this.getqData();
  
  }
  
  response(){
    if(!this.usernameservice.username){
      this.display='block';
    }
    else{
      this.router.navigate(['ques-blog']); 
    }
  }
  
  
  getqData(): void {
    this.dataservice.getqData().subscribe(qdata => (this.qdata = qdata));
  }
  onCloseHandled() {
    this.display = "none";
  }
  Logout(){
    this.router.navigate(['firstpage']); 
    this. dataservice.setLoggedIn(false);
    this.usernameservice.username='';
  }
  Mytimer(){
  
  }
}
