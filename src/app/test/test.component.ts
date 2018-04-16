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
  historic = [];
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
    const sub = this.selectPlayer.powerstats.power - this.selectIa.powerstats.durability;
    console.log(sub);
    if (sub <= 0) {
      const damage = Math.floor(this.selectPlayer.powerstats.power / 2);
      this.healthIa -= damage;
      // get historic
      this.historic.push(this.selectPlayer.name + ' caused ' + damage + ' damage');
      // end get historic
    } else {
      this.historic.push(this.selectPlayer.name + ' caused ' + sub + ' damage');
      this.healthIa -= sub;

    }

    setTimeout(() => { this.turnIa(); }, 1000);
  }
  useStrength() {
    console.log(this.selectPlayer.powerstats.strength);
    console.log(this.selectIa.powerstats.durability);
    const sub = this.selectPlayer.powerstats.strength - this.selectIa.powerstats.durability;
    console.log(sub);
    if (sub < 0) {
      const damage = Math.floor(this.selectPlayer.powerstats.strength / 2);
      this.healthIa -= damage;
      // get historic
      this.historic.push(this.selectPlayer.name + ' caused ' + damage + ' damage');
      // end get historic
    } else {
      this.historic.push(this.selectPlayer.name + ' caused ' + sub + ' damage');
      this.healthIa -= sub;
    }
    setTimeout(() => { this.turnIa(); }, 1000);
  }
  useMagic() {
    const sub = 70 - this.selectIa.powerstats.durability;
    console.log(sub);
    if (sub < 0) {
      const damage = Math.floor(70 / 2);
      this.healthIa -= damage;
      // get historic
      this.historic.push(this.selectPlayer.name + ' caused ' + damage + ' damage');
      // end get historic
    } else {
      this.historic.push(this.selectPlayer.name + ' caused ' + sub + ' damage');
      this.healthIa -= sub;
    }
    setTimeout(() => { this.turnIa(); }, 1000);
  }
  turnIa() {
    if (this.healthIa <= 0) {
      this.endGame('You win');
    } else {
      const iaChoice = Math.floor(Math.random() * 10);
      if (iaChoice < 3) {
        console.log(this.selectIa.powerstats.power);
        console.log(this.selectPlayer.powerstats.durability);
        const sub = this.selectIa.powerstats.power - this.selectPlayer.powerstats.durability;
        console.log(sub);
        if (sub < 0) {
          const damage = Math.floor(this.selectIa.powerstats.power / 2);
          this.healthPlayer -= damage;
          // get historic
          this.historic.push(this.selectPlayer.name + ' caused ' + damage + ' damage');
          // end get historic
        } else {
          this.historic.push(this.selectIa.name + ' caused ' + sub + ' damage');
          this.healthPlayer -= sub;
        }
      } else if (iaChoice < 6) {
        const sub = this.selectIa.powerstats.strength - this.selectPlayer.powerstats.durability;
        console.log(sub);
        if (sub < 0) {
          const damage = Math.floor(this.selectIa.powerstats.power / 2);
          this.healthPlayer -= damage;
          // get historic
          this.historic.push(this.selectPlayer.name + ' caused ' + damage + ' damage');
          // end get historic
        } else {
          this.historic.push(this.selectIa.name + ' caused ' + sub + ' damage');
          this.healthPlayer -= sub;
        }
      } else {
        console.log('coucou');
        const sub = 70 - this.selectPlayer.powerstats.durability;
        console.log(sub);
        if (sub < 0) {
          const damage = Math.floor(70 / 2);
          this.healthPlayer -= damage;
          // get historic
          this.historic.push(this.selectPlayer.name + ' caused ' + damage + ' damage');
          // end get historic
        } else {
          this.historic.push(this.selectIa.name + ' caused ' + sub + ' damage');
          this.healthPlayer -= sub;
        }
      }
      if (this.healthPlayer <= 0) {
        this.endGame('You loose');
      }
    }
  }
  endGame(winner) {
    document.getElementById('hide').style.display = 'inline-block';
    alert(winner + ' is the winner !');
  }
  ngOnInit() {
    document.getElementById('hide').style.display = 'none';
    this.apiService.getHeroes().subscribe(heroes => {
      // console.log(heroes);
      this.heroes = heroes;
    });
  }
}
