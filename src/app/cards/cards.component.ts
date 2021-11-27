import { Component, OnInit } from '@angular/core';
import {User} from '../shared/models/user.model';
import {UserService} from '../shared/services/user.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(u => {
      this.users = u;
    });
  }

}
