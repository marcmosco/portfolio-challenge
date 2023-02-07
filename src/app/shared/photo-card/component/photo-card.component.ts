import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PhotoModel } from '../../model/photo.model';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ModalDetailPhotoComponent } from '../../modal-detail-photo/component/modal-detail-photo.component';
import { UserModel } from '../../model/user.model';
import { PhotoCardService } from '../service/photo-card.service';
import { CommentModel } from '../../model/comment.model';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent implements OnInit {
  faArrow = faArrowRight;
  user: UserModel;

  @Input('photo') photo: PhotoModel;

  @Input('userId') userId: number;

  @ViewChild('modal') modal: ModalDetailPhotoComponent;

  allComments: CommentModel[] = [];
  showModal: boolean = false;

  constructor(private photoCardService: PhotoCardService) {}

  ngOnInit(): void {}

  openDialog(idPhoto: number) {
    this.photoCardService
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
      });
  }

  closeModal() {
    this.showModal = false;
  }
}
