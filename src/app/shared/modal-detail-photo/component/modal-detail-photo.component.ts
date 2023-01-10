import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { PhotoModel } from '../../model/photo.model';
import { UserModel } from '../../model/user.model';
import { CommentModel } from '../../model/comment.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDetailPhotoService } from '../service/modal-detail-photo.service';
import { PhotoCardService } from '../../photo-card/service/photo-card.service';
import { switchMap } from 'rxjs';
import { faComment } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-modal-detail-photo',
  templateUrl: './modal-detail-photo.component.html',
  styleUrls: ['./modal-detail-photo.component.scss'],
})
export class ModalDetailPhotoComponent implements OnInit {
  @Input('photo') photo: PhotoModel;
  @Input('user') user: UserModel | null;
  @Input('comments') comments: CommentModel[] = [];

  @Output() closeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  faComment = faComment;
  modalForm: FormGroup;

  constructor(
    private renderer: Renderer2,
    private fb: FormBuilder,
    private modalDetailService: ModalDetailPhotoService,
    private photoCardService: PhotoCardService
  ) {
    this.modalForm = this.fb.group({
      comment: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'modal-open');
  }

  closeModal() {
    this.modalForm.reset({ comment: '' });
    this.closeEvent.emit(true);
    this.renderer.removeClass(document.body, 'modal-open');
  }

  saveComment() {
    let today = new Date();

    const comment: CommentModel = {
      photoId: this.photo.id,
      userId: 10,
      body: this.modalForm.get('comment')!.value,
      creationDate:
        today.getDate() +
        '/' +
        (today.getMonth() + 1) +
        '/' +
        today.getFullYear(),
    };

    this.modalDetailService
      .addComment(comment)
      .pipe(
        switchMap((res) => {
          return this.photoCardService.getCommentsByPhotoId(this.photo.id);
        })
      )
      .subscribe((res) => {
        this.comments = res;
        this.modalForm.reset({ comment: '' });
      });
  }
}
