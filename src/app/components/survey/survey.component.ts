import { Component, OnInit } from '@angular/core';
// import * as SurveyEditor from 'surveyjs-editor';
 import * as Survey from 'survey-angular';


 //Survey.Survey.cssType = "bootstrap";

 var surveyJSON = {
  "pages":[ {
      "name":"page1",
      "elements":[ {
          "type":"checkbox",
          "name":"question1",
          "title":"in general whould you say your health is",
          "hasOther":true,
          "choices":[ {
              "value": "good", "text": "good"
          }
          ,
          {
              "value": "verygood", "text": "verygood"
          }
          ,
          {
              "value": "fair", "text": "fair"
          }
          ],
          "otherText":"poor"
      }
      ,
      {
          "type":"radiogroup",
          "name":"question2",
          "title":"what is the highest level education you did",
          "choices":[ {
              "value": "primary", "text": "primary"
          }
          ,
          {
              "value": "secondary", "text": "secondary scholl"
          }
          ,
          {
              "value": "graduation", "text": "graduation"
          }
          ]
      }
      ,
      {
          "type":"dropdown",
          "name":"question3",
          "visibleIf":"{question1} = [\"item1\"]",
          "title":"3a. Which country you born in",
          "enableIf":"{question1} == 'good'",
          "isRequired":true,
          "choices":["india",
          {
              "value": "us", "text": "US"
          }
          ,
          {
              "value": "newyork", "text": "Newyork"
          }
          ],
          "choicesOrder":"asc"
      }
      ,
      {
          "type": "text", "name": "question4", "title": "what year did you first come to  live in US"
      }
      ,
      {
          "type":"matrix",
          "name":"question5",
          "visibleIf":"{question4} contains 2015",
          "title":"Where you borned in US",
          "isRequired":true,
          "columns":[ {
              "value": "yes", "text": "Yes"
          }
          ,
          {
              "value": "no", "text": "No"
          }
          ,
          {
              "value": "not answer", "text": "Prefer not to Anwser"
          }
          ],
          "rows":["1"]
      }
      ,
      {
          "type":"matrix",
          "name":"question6",
          "title":"Does you Health limit you in this activities? if so,how much:",
          "enableIf":"{question5.1} = \"yes\"",
          "isRequired":true,
          "columns":["yes,limited a lot",
          "yes, limited a little",
          "no,not limed at all",
          {
              "value": "prefer not to answer", "text": "Prefer not to answer"
          }
          ],
          "rows":["Moving table, pushing a vaccume",
          "vigarous activities like running,lifting heavy objects",
          "climbing several flights"]
      }
      ]
  }
  ],
  "triggers":[ {
      "type":"skip",
      "expression":"{question1} = [\"item1\"]",
      "gotoName": "question6"
  }
  ,
  {
      "type":"complete",
      "expression":"{question1} = [\"item1\"]"
  }
  ]
}

 function sendDataToServer(survey) {
     //send Ajax request to your web server.
     console.log("survay data",survey.data);
     alert("The results are:" + JSON.stringify(survey.data));
 }

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
 // editor: SurveyEditor.SurveyEditor;

  constructor() { }

  ngOnInit() {
   // Survey.surveyStrings.loadingSurvey = "Please wait. Your survey is loading…";
      var survey = new Survey.Model(surveyJSON);
      survey.onComplete.add(sendDataToServer);
    Survey.SurveyNG.render("surveyElement", { model: survey });
    //Survey.surveyStrings.savingData = "Please wait. We are validating and saving your reponse";
  }

}