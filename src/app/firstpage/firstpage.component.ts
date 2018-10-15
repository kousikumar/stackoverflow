import { Component, OnInit } from '@angular/core';
import{ UsernameService} from "../username.service";
@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
  constructor(public usernameservice:UsernameService) { }
  user={};
  ngOnInit() {
  }
  change(va){
    this.user['sample']=va;
  }
}
