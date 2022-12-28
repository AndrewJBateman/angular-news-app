import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { NewsApiService } from "./news-api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // declare empty arrays for articles and news sources
  mArticles$: Observable<any>;
  mSources$: Observable<any>;

  constructor(private newsapi: NewsApiService) {
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.mArticles$ = this.newsapi.initArticles();
    this.mSources$ = this.newsapi.initSources();
  }


  // function to search for articles based on a news source (selected from UI mat-menu)
  searchArticles(source: string) {
    this.mArticles$ = this.newsapi.getArticlesByID(source);
  }
}
