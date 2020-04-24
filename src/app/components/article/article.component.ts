import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookServices } from './book-services';
import { Book } from './book-model';
import { ON_OFF_ANIMATION } from './on-off.animation';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  animations: [
    ON_OFF_ANIMATION
  ]
})
export class ArticleComponent implements OnInit {
  book: Promise<Book[]>;
  constructor(private _serve: BookServices, private route: Router) { }

  ngOnInit() {
    this.book = this._serve.getBook();
  }

  edit(book: Book) {
        this._serve.resetBookState(book).then(() => {
          return this.route.navigate([{ outlets: { bookPopup: ['update-book', book.id] } }])
        })
    }

}
