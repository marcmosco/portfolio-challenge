import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CommentModel } from '../../model/comment.model';

@Injectable({
  providedIn: 'root',
})
export class ModalDetailPhotoService {
  constructor(private httpClient: HttpClient) {}

  addComment(comment: CommentModel): Observable<CommentModel> {
    const url = `${environment.baseRestApi}/comments`;

    return this.httpClient.post<CommentModel>(url, comment);
  }
}
