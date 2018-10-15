import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstpageComponent } from "./firstpage/firstpage.component";
import { LogInComponent } from "./log-in/log-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { AnswersComponent } from "./answers/answers.component";
import { QuesBlogComponent } from "./ques-blog/ques-blog.component";
import {HistoryComponent} from "./history/history.component";

import { AuthGuard } from "./auth.guard";
import { AppComponent } from "./app.component";
const routes: Routes = [
  { path: "firstpage", component: FirstpageComponent },
  { path: "log-in", component: LogInComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "ques-blog", component: QuesBlogComponent, canActivate: [AuthGuard] },
  { path: "answers/:id", component: AnswersComponent },
  {path:"history",component:HistoryComponent},
  {path:"app",component:AppComponent}
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
