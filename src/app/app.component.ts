import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // declare empty arrays for articles and news sources
  mArticles: Array<any>;
  mSources: Array<any>;

  constructor(private newsapi: NewsApiService) {
    console.log('app component constructor called');
  }

// tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    // load articles
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    // load news sources
    this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
    }

  // function to search for articles based on a news source (selected from UI mat-menu)
  searchArticles(source) {
    console.log('selected source is: ' + source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }

}
