import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from '../book';
import { BookService } from '../book.service';
import { Subscription } from 'rxjs/Subscription'; // Allows us to subscribe to an observable; In this case ActivateRoute Observable

@Component({
    moduleId: module.id,
    templateUrl: 'book-details.component.html'
})

export class BookDetailsComponent implements OnInit{
    book: IBook;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _bookService: BookService){
                    console.log(this._route.snapshot.params['id']);
                }

    ngOnInit(): void {
    // watch for an observable coming through the route
    this.sub = this._route.params.subscribe(
        params => {
            let id = params['id'];
            this.getBook(id);
        });
    }

    // Method for getting book with a specified id
    getBook(id: string){
        this._bookService.getBook(id).subscribe(
            book => this.book = book,
            error => this.errorMessage = <any>error
        );
    }

}