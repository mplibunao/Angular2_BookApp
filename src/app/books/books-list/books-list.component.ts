import { Component, OnInit } from '@angular/core';
import { IBook } from '../book';
import { BookService } from '../book.service';

@Component({
	moduleId: module.id,
	//selector: 'bs-books-list',
	templateUrl: 'books-list.component.html'
})

export class BooksListComponent implements OnInit{
	
	books: IBook[];
	imageWidth: number = 100;
	showImage: boolean = true;
	booksInStock: number = 3;
	favoriteMessage: string = '';
	errorMessage: string;

	constructor(private _bookService: BookService) { }

	ngOnInit(){
		this.getBooks()	// onInit, call getBooks method
	}

	getBooks(){
		this._bookService.getBooks()	// call the getBooks method of the _bookService we defined in our constructor
			.subscribe(	// subscribe to Observable 
				books => this.books = books,
				// pass an arrow function setting our books property equal to the argument
				error => this.errorMessage = <any>error
			)
	}

	/*
	books: any[] = [{
		bookAuthor: "Tom Jones",
		bookTitle: "War and Peach 2",
		bookPrice: 29.95,
		bookDescription: "Book of historical fiction",
		publishedOn: new Date('02/11/1921'),
		inStock: "yes",
		bookReviews: 15,
		bookImageUrl: "app/assets/images/656.jpg",
		hardcover: true
	},
	{
		bookAuthor: "Mike Jones",
		bookTitle: "War and Peach 3",
		bookPrice: 19.95,
		bookDescription: "Book of historical fiction",
		publishedOn: new Date('02/11/1921'),
		inStock: "yes",
		bookReviews: 18,
		bookImageUrl: "app/assets/images/656.jpg",
		hardcover: true
	}];
	*/

	onFavoriteClicked(message: string): void {
		this.favoriteMessage = message;
	}

	toggleImage(): void {
		this.showImage = !this.showImage;
	}

}