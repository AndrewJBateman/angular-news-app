# Angular News App

* Displays a left hand side navigation bar that allows the user to select a news channel. A single column displays news articles from this news channel. The News API service from [newsapi](https://newsapi.org) is used to generate the articles.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* Uses the model-view-viewmodel (MVVM) of Angular to bind the remote data that is stored in objects in the application template. The component plays the part of the controller/viewmodel. The template represents the view.

## Screenshots

![Example screenshot](./img/news-headlines.png).

## Technologies

* [Angular v9.1.0](https://angular.io/)
* [RxJS Library v6.5.4](https://angular.io/guide/rx-library) used to [subscribe](http://reactivex.io/documentation/operators/subscribe.html) to the API data [observables](http://reactivex.io/documentation/observable.html).
* [News REST API](https://newsapi.org/) used to search for news articles.
* [Angular Material Design v9.1.0](https://material.angular.io/) used for the user interface, especially [mat-menu](https://material.angular.io/components/menu/overview)[mat-sidenav](https://material.angular.io/components/sidenav/overview), [mat-card](https://material.angular.io/components/card/overview) etc.

## Setup

* Install dependencies using `npm i`
* Get yourself a free API key from `www.newsapi.org`
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app does automatically reload if you change any of the source files.

## Code Examples

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

## Features

* [Angular HttpClient](https://angular.io/guide/http) module used to communicate with back-end services via the XMLHttpRequest browser interface.
* Updated to latest Angular 9 version with all dependency conflicts resolved.
* Angular material theme improved upon - now has white action buttons in the footer.

## Status & To-Do List

* Status: Updated and working. Gets API news data and displays it in a format suitable for viewing on a phone. User can select the news source from  menu.
* To-Do: nothing. I have done other news apps using the same API.

## Inspiration

* [article by Rashid Sakara on building a news application using Angular 6 and Google’s Material Design](https://www.smashingmagazine.com/2018/10/news-application-with-angular-and-material-design/)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
