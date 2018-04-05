import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  BASE_URL = 'https://akabab.github.io/superhero-api/api/';

  constructor(private http: HttpClient) { }

  getHeroes() {
    return this.http.get(this.BASE_URL + 'all.json');
  }
  getHeroesId(id) {
    return this.http.get(this.BASE_URL + 'id/' + id + '.json');
  }
  getHeroesPower(id) {
    return this.http.get(this.BASE_URL + 'powerstats/' + id + '.json');
  }
  getHeroesAppearance(id) {
    return this.http.get(this.BASE_URL + 'appearance/' + id + '.json');
  }
  getHeroesBiography(id) {
    return this.http.get(this.BASE_URL + 'biography/' + id + '.json');
  }
  // getHeroesImageXs(slug) {
  // return this.http.get(this.BASE_URL + 'images/xs/' + slug + '.jpg');
  // }
  // getHeroesImageLg(slug) {
  // return this.http.get(this.BASE_URL + 'images/lg/' + slug + '.jpg');
  // }
}
