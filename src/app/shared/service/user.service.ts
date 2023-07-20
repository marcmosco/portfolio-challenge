import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private logged: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>({
    id: 0,
    name: '',
    email: '',
  });

  constructor() {}

  getInfoObs(): Observable<UserModel> {
    return this.logged.asObservable();
  }

  setInfoObs(user: UserModel) {
    console.log('user', user);
    this.logged.next(user);
  }

  takeValue(): UserModel {
    return this.logged.value;
  }

  checkLoggedStatus(): boolean {
    return !!this.logged.value.id;
  }
}
