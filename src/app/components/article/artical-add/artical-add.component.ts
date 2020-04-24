import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { ROUND_ANTICLOCK_ANIMATION } from '../round-anticlock.animation';
import { BookServices } from '../book-services';
import { Book } from '../book-model';

@Component({
  selector: 'app-artical-add',
  templateUrl: './artical-add.component.html',
  styleUrls: ['./artical-add.component.css'],
  animations: [
    ROUND_ANTICLOCK_ANIMATION
  ]
})
export class ArticalAddComponent implements OnInit {

  @HostBinding('@roundAntiClockTrigger') roundAntiClockTrigger = 'in';
  book = new Book();
  constructor(private bookService: BookServices, private router: Router) {
  }
  ngOnInit() {
  }

  add() {
    this.bookService.addBook(this.book).then(
      () => this.router.navigate([{ outlets: { bookPopup: null } }])
    );
  }


}
