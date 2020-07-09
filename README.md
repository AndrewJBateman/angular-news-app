# :zap: Angular News App

* Displays a left hand side navigation bar that allows the user to select a news channel. A single column displays news articles from this news channel. The News API service from [newsapi](https://newsapi.org) is used to generate the articles.
* The [News REST API](https://newsapi.org/) now only works on localhost. It will not work when deployed due to CORS errors (error 406) which means they want you to pay a subscription to fully access the API.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## :page_facing_up: Table of contents

* [:zap: Angular News App](#zap-angular-news-app)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Uses the model-view-viewmodel (MVVM) of Angular to bind the remote data that is stored in objects in the application template. The component plays the part of the controller/viewmodel. The template represents the view.

## :camera: Screenshots

![Example screenshot](./img/news-headlines.png).

## :signal_strength: Technologies

* [Angular v10](https://angular.io/)
* [RxJS Library v6](https://angular.io/guide/rx-library) used to [subscribe](http://reactivex.io/documentation/operators/subscribe.html) to the API data [observables](http://reactivex.io/documentation/observable.html).
* [News REST API](https://newsapi.org/) used to search for news articles.
* [Angular Material Design v10](https://material.angular.io/) used for the user interface, especially [mat-menu](https://material.angular.io/components/menu/overview)[mat-sidenav](https://material.angular.io/components/sidenav/overview), [mat-card](https://material.angular.io/components/card/overview) etc.

## :floppy_disk: Setup

* Install dependencies using `npm i`
* Get yourself a free API key from `www.newsapi.org`
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app does automatically reload if you change any of the source files.

## :computer: Code Examples

* `news-api.service.ts` to get API news data using Angular httpClient module.

```typescript

import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = 'YOUR API KEY';

  constructor(private http: HttpClient) { }
  initSources() {
     return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
  }
  initArticles() {
   return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key);
  }
  getArticlesByID(source: String) {
   return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
  }
}

```

## :cool: Features

* [Angular HttpClient](https://angular.io/guide/http) module used to communicate with back-end services via the XMLHttpRequest browser interface.
* Updated to latest Angular 9 version with all dependency conflicts resolved.
* Angular material theme improved upon - now has white action buttons in the footer.

## :clipboard: Status & To-Do List

* Status: Updated and working. Gets API news data and displays it in a format suitable for viewing on a phone. User can select the news source from  menu.
* To-Do: nothing. I have done other news apps using the same API.

## :clap: Inspiration

* [article by Rashid Sakara on building a news application using Angular 6 and Google’s Material Design](https://www.smashingmagazine.com/2018/10/news-application-with-angular-and-material-design/)

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)
