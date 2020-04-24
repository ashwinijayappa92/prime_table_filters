import { Injectable } from '@angular/core'
import { Book } from './book-model';


const BOOKS: Book[] = [
    { "id": 1, "name": "Java", "author": "Mahesh", "state": "off" },
    { "id": 2, "name": "Angular", "author": "Mahesh", "state": "off" },
    { "id": 3, "name": "Spring", "author": "Krishna", "state": "off" },
    { "id": 4, "name": "Hibernate", "author": "Krishna", "state": "off" }
]

let bookPromise = Promise.resolve(BOOKS);
@Injectable()
export class BookServices {

    getBook(): Promise<Book[]> {
        return bookPromise;
    }
  

    addBook(book: Book): Promise<Book> {
        return this.getBook()
            .then(books => {
                let maxIndex = (books.length) - 1;
                let maxBookIndex = books[maxIndex];
                book.id = maxBookIndex.id + 1;
                book.state = 'off';
                books.push(book);
                return book
            })
    }

    getBookId(id: number): Promise<Book> {
        return this.getBook()
            .then(book => book.find(book => book.id == id))
    }
    
    resetBookState(book: Book): Promise<Book[]> {
        return this.getBook().then(books => {
            books.map(book => book.state = 'off');
            book.state = 'on';
            return books;
        })
    }

}


