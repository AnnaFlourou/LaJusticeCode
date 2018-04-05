import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  heroes; // all the heroes
  hero; // hero par rapport a son id
  selectPlayer = null;
  selectIa = null;
  constructor(private apiService: ApiService) { }
  getPerso(param) {
    this.selectPlayer = this.heroes[param];
    console.log(this.selectPlayer);
    this.getIa();
  }
  getIa() {
    const choice = Math.floor(Math.random() * 10);
    switch (choice) {
      case 0:
        this.selectIa = this.heroes[560];
        break;
      case 1:
        this.selectIa = this.heroes[550];
        break;
      case 2:
        this.selectIa = this.heroes[540];
        break;
      case 3:
        this.selectIa = this.heroes[530];
        break;
      case 4:
        this.selectIa = this.heroes[520];
        break;
      case 5:
        this.selectIa = this.heroes[510];
        break;
      case 6:
        this.selectIa = this.heroes[500];
        break;
      case 7:
        this.selectIa = this.heroes[490];
        break;
      case 8:
        this.selectIa = this.heroes[480];
        break;
      case 9:
        this.selectIa = this.heroes[470];
        break;
    }
    console.log(this.selectIa);
  }
  ngOnInit() {
    this.apiService.getHeroes().subscribe(heroes => {
      // console.log(heroes);
      this.heroes = heroes;
    });
  }

}
