import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PhotoModel } from '../../../shared/model/photo.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  loadAllImages(): Observable<PhotoModel[]> {
    const url = `${environment.baseRestApi}/photos?_expand=album`;

    return this.httpClient.get<PhotoModel[]>(url).pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
