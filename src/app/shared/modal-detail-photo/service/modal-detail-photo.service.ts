import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CommentModel } from '../../model/comment.model';

@Injectable({
  providedIn: 'root',
})
export class ModalDetailPhotoService {
  constructor(private httpClient: HttpClient) {}

  addComment(comment: CommentModel, postId: number): Observable<CommentModel> {
    const url = `${environment.goRestApi}/posts/${postId}/comments`;

    return this.httpClient.post<CommentModel>(url, comment);
  }

  getAllCommentsFromPostId(postId: number): Observable<CommentModel[]> {
    const url = `${environment.goRestApi}/posts/${postId}/comments`;

    return this.httpClient.get<CommentModel[]>(url);
  }
}
