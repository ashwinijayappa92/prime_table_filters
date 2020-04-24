import { Component, OnInit, ViewChildren , QueryList, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { AlertComponent } from 'src/app/components/interview/view-childrens/alert-component';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-view-childrens',
  templateUrl: './view-childrens.component.html',
  styleUrls: ['./view-childrens.component.css']
})
export class ViewChildrensComponent implements OnInit, AfterViewInit {
  @ViewChildren(AlertComponent) alerts: QueryList<AlertComponent>;
  @ViewChild('ashu', { static: false }) divs: ElementRef;

  constructor() { }

  ngOnInit() {
    const observable = new Observable(subscriber => {
      subscriber.next(881);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
          subscriber.next(4);
          subscriber.complete();
      }, 1000);
    });

    console.log('just before subscribe');
    observable.subscribe({
        next(x) { console.log('got value ' + x); },
        error(err) { console.error('something wrong occurred: ' + err); },
        complete() { console.log('done'); }
    });
    console.log('just after subscribe');
  }

  ngAfterViewInit() {
    this.alerts.forEach(alertInstance => console.log(alertInstance));
    this.divs.nativeElement.textContent = 'Best Joke machine';
    console.log('ssssssss', this.divs.nativeElement);
  }


}
