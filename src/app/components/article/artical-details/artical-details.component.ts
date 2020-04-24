import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { FLY_IN_OUT_ANIMATION } from '../fly-in-out.animation';
import { BookServices } from '../book-services';
import { Book } from '../book-model';

@Component({
  selector: 'app-artical-details',
  templateUrl: './artical-details.component.html',
  styleUrls: ['./artical-details.component.css'],
  animations: [
    FLY_IN_OUT_ANIMATION
  ]
})
export class ArticalDetailsComponent implements OnInit {
  @HostBinding('@flyInOutTrigger') flyInOutTrigger = 'in';
  books: Promise<Book[]>
  constructor(private bookService: BookServices, private router: Router) { }

  ngOnInit() {
    this.books = this.bookService.getBook();
  }
  close() {
    this.router.navigate([{ outlets: { bookList: null } }]);
  }
}
