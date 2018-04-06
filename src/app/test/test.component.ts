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
  healthPlayer = 500;
  healthIa = 500;
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
  usePower() {
    console.log(this.selectPlayer.powerstats.power);
    console.log(this.selectIa.powerstats.durability);
    console.log(this.selectIa.powerstats.power);
    const sub = this.selectPlayer.powerstats.power - this.selectIa.powerstats.durability;
    console.log(sub);
    if (sub <= 0) {
      this.healthIa -= Math.floor(this.selectPlayer.powerstats.power / 2);
    } else {
      this.healthIa -= sub;
    }
    setTimeout(() => { this.turnIa(); }, 2000);

    // setTimeout(this.turnIa, 2000);
  }
  useStrength() {
    console.log(this.selectPlayer.powerstats.strength);
    console.log(this.selectIa.powerstats.durability);
    const sub = this.selectPlayer.powerstats.strength - this.selectIa.powerstats.durability;
    console.log(sub);
    if (sub < 0) {
      this.healthIa -= Math.floor(this.selectPlayer.powerstats.strength / 2);
    } else {
      this.healthIa -= sub;
    }
    setTimeout(() => { this.turnIa(); }, 2000);
  }
  turnIa() {
    const iaChoice = Math.floor(Math.random() * 10);
    if (iaChoice < 5) {
      console.log(this.selectIa.powerstats.power);
      console.log(this.selectPlayer.powerstats.durability);
      const sub = this.selectIa.powerstats.power - this.selectPlayer.powerstats.durability;
      console.log(sub);
      if (sub < 0) {
        this.healthPlayer -= Math.floor(this.selectIa.powerstats.power / 2);
      } else {
        this.healthPlayer -= sub;
      }
    } else {
      const sub = this.selectIa.powerstats.strength - this.selectPlayer.powerstats.durability;
      console.log(sub);
      if (sub < 0) {
        this.healthPlayer -= Math.floor(this.selectIa.powerstats.strength / 2);
      } else {
        this.healthPlayer -= sub;
      }
    }
  }
  ngOnInit() {
    this.apiService.getHeroes().subscribe(heroes => {
      // console.log(heroes);
      this.heroes = heroes;
    });
  }

}
