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

* Uses the model-view-viewmodel (MVVM) of Angular to bind the remote data that is stored in objects in our application template. The component plays the part of the controller/viewmodel. The template represents the view.

## Screenshots

![Example screenshot](./img/news-headlines.png).

## Technologies

* [Angular v7.2.14](https://angular.io/) & [Angular CLI v7.3.8](https://cli.angular.io/).

* [Angular HttpClient](https://angular.io/guide/http) module used to communicate with back-end services via the XMLHttpRequest browser interface.

* [RxJS Library v6.5.1](https://angular.io/guide/rx-library) used to [subscribe](http://reactivex.io/documentation/operators/subscribe.html) to the API data [observables](http://reactivex.io/documentation/observable.html).

* [News REST API](https://newsapi.org/) used to search for news articles.

* [Angular Material Design v7.3.7](https://material.angular.io/) used for the user interface.

## Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app does automatically reload if you change any of the source files.

## Code Examples

* `news-api.service.ts` to get API news data using Angular httpClient module.

```typescript

import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = '72abefc7c9da43159f59555269a96a0e';

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

* Angular httpClient used to get data from a news API.

* Updated to latest Angular 7 version with all dependency conflicts resolved.

## Status & To-Do List

* Status: Simple working app that gets API news data and displays it in a format suitable for viewing on a phone. User can select the news source from  menu.

* To-Do: improve UI to resize better so Dev tools screen can be opened properly. Photo sizing not quite right - images are sometimes distorted to fit fixed size.

## Inspiration

* [article by Rashid Sakara on building a news application using Angular 6 and Google’s Material Design](https://www.smashingmagazine.com/2018/10/news-application-with-angular-and-material-design/)

## Contact

Created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
