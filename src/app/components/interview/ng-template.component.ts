import {Component} from '@angular/core';

@Component({
  selector: 'app-template',
  template: `
     <div *ngIf="trueCase else falseCase">
     <h1>Hello world!</h1>
     </div>
      <ng-template #falseCase>
          <button class="tab-button"
                  (click)="login()">{{loginText}}</button>
          <button class="tab-button"
                  (click)="signUp()">{{signUpText}}</button>
      </ng-template>
  `})

export class NgTemplateComponent {
    loginText = 'Login';
    signUpText = 'Sign Up';
     trueCase = false;
    lessons = ['Lesson 1', 'Lessons 2'];

    login() {
        console.log('Login');
    }

    signUp() {
        console.log('Sign Up');
    }
}
