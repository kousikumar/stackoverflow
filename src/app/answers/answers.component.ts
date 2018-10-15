import { Component, OnInit } from '@angular/core';
import {QData} from '../qdata';
import {DataService} from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import{ UsernameService} from "../username.service";
import{Answers} from "../answers";
import{ Views} from "../views";
import {  Router } from '@angular/router';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
   qdata:QData;
   Answer:QData=new QData();
   Answerdata:Answers=new Answers();
  countview:Views=new Views();
   
   display='none';

   today = new Date();
   date = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
    time = this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
  constructor( private router:Router,private route: ActivatedRoute,private dataservice:DataService,  private location: Location,public usernameservice:UsernameService) {
    this.getqData();
   }

  ngOnInit() {
console.log(this.qdata);
    
    // this. CountViews();
  }
  
  addanswer(ans):void{
    const id = +this.route.snapshot.paramMap.get('id');
    if(!(this.usernameservice.username)){
         this.display='block';
         console.log("you should login");
      }else{
       if((this.Answerdata.a.trim()).length!==0 && this.Answerdata.a.length!==0){
        console.log(this.qdata);
         this.Answerdata.date=this.date;
         this.Answerdata.time=this.time;
        this.Answerdata. anspostedname=this.usernameservice.username;
        this.qdata.ans.push(this.Answerdata);
        this.dataservice.pushqData(this.qdata).subscribe(qdata=>this.qdata=qdata);
      }
      }
    }
    
  onCloseHandled(){
    this.display='none'; 
  }

  
  getqData():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataservice.getqData1(id)
    .subscribe(qdata=>this.qdata=qdata);
    
  }
 CountViews(){
  const id = +this.route.snapshot.paramMap.get('id');
  this.Answer.id=id;
  
  
  this.countview.view=1;
  this.Answer.views.push(this.countview);
  this.dataservice.addview(this.Answer).subscribe(qdata=>this.qdata=qdata);
 }
Logout(){
  this.router.navigate(['firstpage']); 
  this. dataservice.setLoggedIn(false);
  this.usernameservice.username='';
}
star(){
  
}
  
  
}
