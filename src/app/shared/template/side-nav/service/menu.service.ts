import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { catchError, map, throwError } from 'rxjs';
import { AlbumModel } from '../../../model/album.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private httpClient: HttpClient) {}

  loadAllAlbums() {
    const url = `${environment.baseRestApi}/albums`;

    return this.httpClient.get<AlbumModel[]>(url);
  }
}
