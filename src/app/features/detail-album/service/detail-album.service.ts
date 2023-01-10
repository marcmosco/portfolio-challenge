import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AlbumModel } from '../../../shared/model/album.model';
import { PhotoModel } from '../../../shared/model/photo.model';

@Injectable({
  providedIn: 'root',
})
export class DetailAlbumService {
  constructor(private httpClient: HttpClient) {}

  getPhotosFromAlbumId(idAlbum: number | null): Observable<PhotoModel[]> {
    const url =
      `${environment.baseRestApi}/photos/?_expand=album&&albumId=` + idAlbum;

    return this.httpClient.get<PhotoModel[]>(url).pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  getAlbumById(idAlbum: string): Observable<AlbumModel> {
    const url = `${environment.baseRestApi}/albums/${idAlbum}?_expand=user`;

    return this.httpClient.get<AlbumModel>(url).pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
