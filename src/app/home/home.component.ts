import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: any[] = [];
  user: any = {};
  toggle = true;

  constructor(private router: Router, private api: ApiService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  ngOnInit(): void {
    this.getUsers();
  }

  // to get a random user
  getUsers() {
    this.api.getAllUsers().subscribe((data: any) => {
      this.users = data.users;
      this.getRandomUser();
    });
  }

  // get one random user
  getRandomUser() {
    var index = Math.floor(Math.random() * 29) + 1;
    this.user = this.users[index];
  }

  // to refresh the page
  refresh() {
    this.getRandomUser();
    this.toggle = !this.toggle;
  }
}
