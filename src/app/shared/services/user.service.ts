import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<any>(`${this.baseUrl}/users`).pipe(map(response => response.data));
  }

  getUser(id): Observable<User> {
    return this.http.get<any>(`${this.baseUrl}/users/${id}`).pipe(map(response => response.data));
  }
}
