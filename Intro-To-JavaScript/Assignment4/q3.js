
"use strict";

class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(this.title, "is already issued.");
        } else {
            this.isIssued = true;
            console.log(this.title, "has been issued.");
        }
    }

    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            console.log(this.title, "has been returned.");
        } else {
            console.log(this.title, "was not issued.");
        }
    }
}

const books = [
    new Book("The Silent River", "Mira Sen", "BK201"),
    new Book("Gardens of Dust", "Arin Dutta", "BK202"),
    new Book("Beyond the Monsoon", "Tavishi Rao", "BK203")
];


function showAvailableBooks() {
    console.log("Available Books:");

    let availableBooks = books.filter(book => !book.isIssued);

    availableBooks.forEach(book => {
        console.log(book.title, "-", book.author, "-", book.ISBN);
    });
}

showAvailableBooks();


let searchISBN = "BK202";
let selectedBook = books.find(book => book.ISBN === searchISBN);

if (selectedBook) {
    selectedBook.issueBook();
} else {
    console.log("Book not found.");
}

showAvailableBooks();


selectedBook.returnBook();
showAvailableBooks();
