import {Component , Input} from '@angular/core';

@Component({
  selector: 'app-ngcontent',
  template: `{{title}}
  <ng-content></ng-content>`
})

export class NgContentComponent{
@Input() title: string = 'success';

}
