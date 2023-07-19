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
import { PostModel } from '../../model/post.model';

@Component({
  selector: 'app-modal-detail-photo',
  templateUrl: './modal-detail-photo.component.html',
  styleUrls: ['./modal-detail-photo.component.scss'],
})
export class ModalDetailPhotoComponent implements OnInit {
  @Input('photo') photo: PhotoModel;
  @Input('user') user: UserModel;
  @Input('comments') comments: CommentModel[] = [];
  @Input('post') post: PostModel;

  @Output() closeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  faComment = faComment;
  modalForm: FormGroup;
  isLoadingData: boolean;

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
    this.isLoadingData = true;
    this.modalDetailService
      .getAllCommentsFromPostId(this.post.id)
      .subscribe((res) => {
        this.comments = res;
        this.isLoadingData = false;
      });
  }

  closeModal() {
    this.modalForm.reset({ comment: '' });
    this.closeEvent.emit(true);
    this.renderer.removeClass(document.body, 'modal-open');
  }

  saveComment() {
    const comment: CommentModel = {
      name: this.user.name,
      email: this.user.email,
      body: this.modalForm.get('comment')!.value,
    };
    this.isLoadingData = true;
    this.modalDetailService
      .addComment(comment, this.post.id)
      .pipe(
        switchMap((res) => {
          return this.modalDetailService.getAllCommentsFromPostId(this.post.id);
        })
      )
      .subscribe((res) => {
        this.comments = res;
        this.modalForm.reset({ comment: '' });
        this.isLoadingData = false;
      });
  }
}
