import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  weather: string = '';
  location: string = '';
  temp: string = '';
  icon: string = '';
  place: string = '';

  constructor(private api: ApiService) {}
  ngOnInit(): void {}
  //search
  search(event: any) {
    this.location = event.target.value;
    this.getTempDetailes();
  }
  getTempDetailes() {
    this.api.getTempDetailes(this.location).subscribe((data: any) => {
      this.weather = data.weather[0].main;
      this.icon = data.weather[0].icon;
      this.temp = (data.main.temp - 273.15).toFixed(2) + '°C';
      this.place = data.name;
    });
  }
}
