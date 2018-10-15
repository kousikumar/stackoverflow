import { Component, OnInit, Input } from '@angular/core';
import  { QData } from '../qdata';
import {DataService} from '../data.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import{ UsernameService} from "../username.service";
import{Answers} from "../answers";
@Component({
  selector: 'app-ques-blog',
  templateUrl: './ques-blog.component.html',
  styleUrls: ['./ques-blog.component.css']
})
export class QuesBlogComponent implements OnInit {
  
qdata:QData[]; 
today = new Date();
date = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
time = this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
searchq='';
searchid;

question: QData = new QData();
Answerdata:Answers=new Answers();
view=0;
C=false;
display='none';          
  constructor(private dataservice:DataService,  private location: Location,private router:Router,public usernameservice:UsernameService) {
    var name=usernameservice.username.substring(1,0);
    console.log(name);
   }
  ngOnInit() {
    this.getqData();
  
  
  }
  getqData():void{
    this.dataservice.getqData().subscribe(qdata =>this.qdata=qdata);
    
    }
    add(){
      if(!this.question.q || !this.question.body){
        console.log('hii');
    }
    else{
      
      this.question.date1=this.date;
      this.question.time=this.time;
      this.question.posteduser=this.usernameservice.username;
    this.dataservice.addQuestion(this.question).subscribe(qdata=>{
      this.qdata.push(qdata);
    });
  }
  }
  
  search(s:any){
    for(let  i in this.qdata)
    {
if(s.value.replace(/\s+/g, "").toLowerCase().substring(1, 4)===this.qdata[i].q.replace(/\s+/g, "").toLowerCase().substring(1, 4))
{
  this.searchq=this.qdata[i].q;
  this.searchid=this.qdata[i].id;
  this.C=true; 
}
}

 if(s.value===''){
    console.log("hii");
    this.display='block';
  
 
}
}

onCloseHandled(){
  this.display='none'; 
}
Logout(){
  this.router.navigate(['firstpage']); 
  this. dataservice.setLoggedIn(false);
  this.usernameservice.username='';
}

}
