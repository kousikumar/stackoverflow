import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DataService} from '../data.service';
import { Data } from '../data';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  display='none';
  data:Data[];
  
  submit=true;
  signup:Data=new Data();
  constructor(private dataservice:DataService,private router:Router) { }
ngOnInit() {
  this.getUserData();
}
response(){
  if(!(this.signup.username) || (!this.signup.password) ||!(this.signup.fullname)){
    console.log("hii");
    this.display='block'; 
  }
  else{
  for(let i in this.data){
  if(this.data.find(signup=>this.signup.username===this.data[i].username)){
    this.display='block'; 
    var usercount=false;
    }
    else{
    usercount=true;
    }
  }}
  
if(usercount){
  this.dataservice.addUserData(this.signup as Data).subscribe(data=>{
         this.data.push(data);
       });
       this.display='block';
  this.submit=false;
  window.location.reload();
 
      }
    
    }






getUserData(){
  this.dataservice.getData().subscribe(data=>this.data=data);
}
onCloseHandled(){
  this.display='none'; 
}  
}
