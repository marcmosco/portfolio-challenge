import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CommentModel } from '../../model/comment.model';
import { UserModel } from '../../model/user.model';
import { PostModel } from '../../model/post.model';
import { PhotoModel } from '../../model/photo.model';
import { UserService } from '../../service/user.service';
import { AuthorModel } from '../../model/author.model';

@Injectable({
  providedIn: 'root',
})
export class PhotoCardService {
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  getCommentsByPhotoId(idPhoto: number): Observable<CommentModel[]> {
    const url = `${environment.baseRestApi}/comments?photoId=${idPhoto}&&_expand=user`;

    return this.httpClient.get<CommentModel[]>(url).pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  getAuthorById(idAuthor: number): Observable<AuthorModel> {
    const url = `${environment.baseRestApi}/authors/${idAuthor}`;

    return this.httpClient.get<AuthorModel>(url);
  }

  getPostFromPostId(id: number): Observable<PostModel> {
    const url = `${environment.goRestApi}/posts/${id}`;

    return this.httpClient.get<PostModel>(url);
  }

  getUserFromUserId(id: number): Observable<UserModel> {
    const url = `${environment.goRestApi}/users/${id}`;

    return this.httpClient.get<UserModel>(url);
  }

  updatePhoto(photo: PhotoModel, post: PostModel): Observable<PhotoModel> {
    const url = `${environment.baseRestApi}/photos/${photo.id}`;
    photo.postId = post.id;
    return this.httpClient.put<PhotoModel>(url, photo);
  }

  createPostFromPhoto(photo: PhotoModel): Observable<PostModel> {
    const loggedUser = this.userService.takeValue();
    const url = `${environment.goRestApi}/users/${loggedUser.id}/posts`;
    const post = {
      title: `Do you like the picture ${photo.id}?`,
      body: 'Tell us your opinion!',
    };
    return this.httpClient.post<PostModel>(url, post);
  }
}
