import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {User} from '../shared/models/user.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe(u => {
      this.user = u;
    });
  }

}
