import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CommentModel } from '../../model/comment.model';
import { UserModel } from '../../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class PhotoCardService {
  constructor(private httpClient: HttpClient) {}

  getCommentsByPhotoId(idPhoto: number): Observable<CommentModel[]> {
    const url = `${environment.baseRestApi}/comments?photoId=${idPhoto}&&_expand=user`;

    return this.httpClient.get<CommentModel[]>(url).pipe(
      map((res) => {
        return this.sortResDate(res);
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  getUserById(idUser: number): Observable<UserModel> {
    const url = `${environment.baseRestApi}/users/${idUser}`;

    return this.httpClient.get<UserModel>(url).pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  //metodo custom per il sort
  private sortResDate(res: CommentModel[]): CommentModel[] {
    return res.sort((a, b) => {
      return b.creationDate === a.creationDate
        ? b.id! - a.id!
        : new Date(
            +b.creationDate.split('/')[2],
            +b.creationDate.split('/')[1],
            +b.creationDate.split('/')[0]
          ).getTime() -
            new Date(
              +a.creationDate.split('/')[2],
              +a.creationDate.split('/')[1],
              +a.creationDate.split('/')[0]
            ).getTime();
    });
  }
}
