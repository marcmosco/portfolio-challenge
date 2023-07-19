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

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent implements OnInit {
  faArrow = faArrowRight;
  user: UserModel;
  post: PostModel;

  @Input('photo') photo: PhotoModel;

  @Input('userId') userId: number;

  @ViewChild('modal') modal: ModalDetailPhotoComponent;

  allComments: CommentModel[] = [];
  showModal: boolean = false;

  constructor(private photoCardService: PhotoCardService) {}

  ngOnInit(): void {}

  openDialog(idPhoto: number) {
    if (this.photo.postId) {
      this.photoCardService
        .getPostFromPostId(this.photo.postId)
        .pipe(
          switchMap((res) => {
            this.post = res;
            return this.photoCardService.getUserFromUserId(this.post.user_id);
          }),
          map((res) => {
            this.user = res;
            this.showModal = true;
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
          switchMap((res) => {
            this.photo = res;
            return this.photoCardService.getUserFromUserId(this.post.user_id);
          }),
          map((res) => {
            this.user = res;
            this.showModal = true;
          })
        )
        .subscribe();
    }
    /*this.photoCardService
      .getCommentsByPhotoId(idPhoto)
      .pipe(
        switchMap((res) => {
          this.allComments = res;
          return this.photoCardService.getUserById(this.userId);
        })
      )
      .subscribe((res) => {
        this.user = res;
        this.showModal = true;
      });*/
  }

  closeModal() {
    this.showModal = false;
  }
}
