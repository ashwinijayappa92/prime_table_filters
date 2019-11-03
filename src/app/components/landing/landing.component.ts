import { Component, OnInit } from '@angular/core';
import * as Survey from 'survey-angular';
// var json = {
//   pages: [
//   {
//   name: "customerContact", elements: [
//   { type: "text", name: "name", title: "Please enter your name:" },
//   { type: "text", name: "email", title: "Please enter your e-mail:" }
//   ]
//   }
//   ]
//   };
 
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})


export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  //    //Create initial survey model using json
  // var survey = new Survey.Survey(json);
  // //set the place holder for "email" question
  // var emailQuestion = survey.getQuestionByName("email");
  // if (emailQuestion) emailQuestion.placeHolder = "json.snow@nightwatch.org";
  // //Add a new question into existing page
  // var contactPage = survey.getPageByName("customerContact");
  // if (contactPage) {
  // var fbPageQuestion = contactPage.addNewQuestion("text", "fbPage");
  // fbPageQuestion.title = "Please enter your facebook page:"
  // }

  }
  private questionaries(){
    
  }

}
