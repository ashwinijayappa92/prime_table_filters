import {Component , Input, ContentChild, AfterContentInit, ContentChildren, QueryList} from '@angular/core';
import {NgContentComponent} from './ng-content.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';
@Component({
  selector: 'app-alert',
  template: `<h1 (click)="alert()">{{type}}</h1>
  <ng-content></ng-content>
  <ng-content></ng-content>`
})

export class AlertComponent implements AfterContentInit, AfterContentInit{
@Input() type: string = 'success';
@ContentChild('insideNgContent', {static: false}) insideNgContent;
@ContentChildren(NgContentComponent) content: QueryList<NgContentComponent>;

ngAfterContentInit() {
  console.log('alert content', this.insideNgContent);
 // console.log('content childrens', this.content);
  this.content.forEach(ele => {
    console.log('contentchildrens', ele.title);
  });
}
alert() {
 // console.log('alert');
 }
}
