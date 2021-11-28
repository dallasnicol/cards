import {of} from 'rxjs';

export class MockUserService {
  getUser(id) {
    return of({});
  }

  getUsers() {
    return of([]);
  }
}
