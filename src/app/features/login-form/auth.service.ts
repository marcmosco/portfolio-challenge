import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from "../../../environments/environment";



@Injectable({
  providedIn: 'root',
})
export class AuthService {


  constructor(private http: HttpClient,) {}

  loginUser(user): Observable<any> {
    return this.http
      .post<any>(environment.goRestApi+'/users', {...user, status:'active'}, { observe: 'response' })
      .pipe(
        map((res) => {
          console.log(res);
          return res.body;
        })
      );
  }
}
