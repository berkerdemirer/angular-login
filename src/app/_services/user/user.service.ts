import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../_models/user/user.model';
import {environment} from '../../../environments/environment';


@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getById(id: number) {
    return this.http.get(`${environment.apiUrl}/users/${id}`);
  }

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/users/register`, user);
  }
}
