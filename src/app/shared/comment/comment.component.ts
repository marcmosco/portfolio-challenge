import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommentModel } from '../model/comment.model';
import { EllipsisDirective } from 'ngx-ellipsis';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input('comment') comment: CommentModel;
  @ViewChild(EllipsisDirective) ellipsisRef: EllipsisDirective;

  showMore = false;

  showMoreButton = false;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  truncated(index: number) {
    this.showMoreButton = index === null;
  }

  showComplete() {
    if (this.ellipsisRef) {
      this.showMore = true;
      this.cd.detectChanges();
      this.ellipsisRef.applyEllipsis();
    }
  }
}
