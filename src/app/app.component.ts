import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  results = '';
  // azerty = '';
  constructor(/*private http: HttpClient*/) {
  }
  ngOnInit(): void {
    document.getElementById('butOne').style.display = 'block';
    /*this.http.get('https://akabab.github.io/superhero-api/api/id/729.json').subscribe(data => {
      console.log(data);
      this.azerty = data.images.md;
  });*/
  }
}
