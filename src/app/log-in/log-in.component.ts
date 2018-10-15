import { Component, OnInit, Input } from '@angular/core';
import {DataService} from '../data.service';
import { Data } from '../data';
import { Router } from '@angular/router';
import{ UsernameService} from "../username.service";


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
 data:Data[];
 login:Data=new Data();
 display='none';
 userreturn;
  constructor(private dataservice:DataService,private router:Router,public usernameservice:UsernameService ) { }
  ngOnInit() {
    this.getData();
  }
  response(){
    if(!(this.login.username)||!(this.login.password)){
      this.display='block'; 
    }
    else{
    for(let i in this.data){
    if(this.data.find(login=>this.login.username===this.data[i].username) && this.data.find(login=>this.login.password===this.data[i].password) ){
      this.router.navigateByUrl('ques-blog');// (['ques-blog']); 
    this. dataservice.setLoggedIn(true);
    this.dataservice.getusername(this.data[i].fullname);
    var usercount=false;
    break;
    }
    else{
      var usercount=true;
    }
    }
  }
  if(usercount){
    this.display='block'; 
  }
}
  onCloseHandled(){
    this.display='none'; 
  }
  
getData():void{
this.dataservice.getData().subscribe(data =>this.data=data);

}
}
