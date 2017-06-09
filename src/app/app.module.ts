import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { HighlightDirective } from './shared/highlight.directive';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { FavoriteComponent } from './favorites/favorite.component';
import { BookService } from './books/book.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { BookDetailsComponent} from './books/book-details/book-details.component';

@NgModule({
  imports:      [ BrowserModule,
                FormsModule,
                HttpModule ,
                RouterModule.forRoot([
    { path: "books", component: BooksListComponent },
    { path: "book/:id", component: BookDetailsComponent },
    { path: "welcome", component: WelcomeComponent },
    { path: "", redirectTo: "welcome", pathMatch: "full" },
    { path: "**", redirectTo: "welcome", pathMatch: "full" }
                ]) ],
  declarations: [ AppComponent,
                BooksListComponent,
                HighlightDirective,
                TruncatePipe,
                FavoriteComponent,
                WelcomeComponent,
                BookDetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ BookService ]
})

export class AppModule { }
