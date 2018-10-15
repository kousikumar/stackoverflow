import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import{HttpClientModule} from  '@angular/common/http';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { TopQuesComponent } from './top-ques/top-ques.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';

import { AppRoutingModule } from './/app-routing.module';
import { QuesBlogComponent } from './ques-blog/ques-blog.component';
import { AnswersComponent } from './answers/answers.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard  } from './auth.guard';
import { HistoryComponent } from './history/history.component';
import { AppModalComponent } from './modal/app.modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    TopQuesComponent,
    SignUpComponent,
    LogInComponent,
    QuesBlogComponent,
    AnswersComponent,
    HistoryComponent,
    AppModalComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
 
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
