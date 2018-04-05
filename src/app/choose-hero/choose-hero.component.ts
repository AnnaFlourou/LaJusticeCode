import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-choose-hero',
  templateUrl: './choose-hero.component.html',
  styleUrls: ['./choose-hero.component.css']
})

export class ChooseHeroComponent implements OnInit {
  hero = [];
  hName = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Men
    this.http.get('https://akabab.github.io/superhero-api/api/id/729.json').subscribe(data => {
      this.hero.push(data.images.sm);
      this.hName.push(data.name);
      console.log(data);
    });
    this.http.get('https://akabab.github.io/superhero-api/api/id/644.json').subscribe(data => {
      this.hero.push(data.images.sm);
      this.hName.push(data.name);
    });
    this.http.get('https://akabab.github.io/superhero-api/api/id/620.json').subscribe(data => {
      this.hero.push(data.images.sm);
      this.hName.push(data.name);
    });
    this.http.get('https://akabab.github.io/superhero-api/api/id/346.json').subscribe(data => {
      this.hero.push(data.images.sm);
      this.hName.push(data.name);
    });
    this.http.get('https://akabab.github.io/superhero-api/api/id/450.json').subscribe(data => {
      this.hero.push(data.images.sm);
      this.hName.push(data.name);
    });
    // Women
    this.http.get('https://akabab.github.io/superhero-api/api/id/172.json').subscribe(data => {
      this.hero.push(data.images.sm);
      this.hName.push(data.name);
    });
    this.http.get('https://akabab.github.io/superhero-api/api/id/619.json').subscribe(data => {
      this.hero.push(data.images.sm);
      this.hName.push(data.name);
    });
    this.http.get('https://akabab.github.io/superhero-api/api/id/618.json').subscribe(data => {
      this.hero.push(data.images.sm);
      this.hName.push(data.name);
    });
    this.http.get('https://akabab.github.io/superhero-api/api/id/632.json').subscribe(data => {
      this.hero.push(data.images.sm);
      this.hName.push(data.name);
    });
    this.http.get('https://akabab.github.io/superhero-api/api/id/660.json').subscribe(data => {
      this.hero.push(data.images.sm);
      this.hName.push(data.name);
    });
    console.log(this.hName);
  }
}