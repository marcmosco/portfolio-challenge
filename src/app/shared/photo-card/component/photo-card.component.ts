import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PhotoModel } from '../../model/photo.model';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ModalDetailPhotoComponent } from '../../modal-detail-photo/component/modal-detail-photo.component';
import { UserModel } from '../../model/user.model';
import { PhotoCardService } from '../service/photo-card.service';
import { CommentModel } from '../../model/comment.model';
import { switchMap } from 'rxjs';
import { PostModel } from '../../model/post.model';
import { map } from 'rxjs/operators';
import { AuthorModel } from '../../model/author.model';
import { AlbumModel } from '../../model/album.model';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent implements OnInit {
  @Input('photo') photo: PhotoModel;
  @Input('album') album: AlbumModel;

  author: AuthorModel;
  user: UserModel;
  post: PostModel;
  liked: boolean;
  isLoadingData: boolean;
  allComments: CommentModel[] = [];
  showModal: boolean = false;

  @ViewChild('modal') modal: ModalDetailPhotoComponent;

  constructor(private photoCardService: PhotoCardService) {}

  ngOnInit(): void {
    this.author = this.album.author;
  }

  openDialog() {
    this.isLoadingData = true;
    if (this.photo.postId) {
      this.photoCardService
        .getPostFromPostId(this.photo.postId)
        .pipe(
          map((res) => {
            this.post = res;
            this.showModal = true;
            this.isLoadingData = false;
          })
        )
        .subscribe();
    } else {
      this.photoCardService
        .createPostFromPhoto(this.photo)
        .pipe(
          switchMap((res) => {
            this.post = res;
            return this.photoCardService.updatePhoto(this.photo, this.post);
          }),
          map((res) => {
            this.photo = res;
            this.showModal = true;
            this.isLoadingData = false;
          })
        )
        .subscribe();
    }
  }

  like() {
    this.liked = !this.liked;
  }

  closeModal() {
    this.showModal = false;
  }
}
