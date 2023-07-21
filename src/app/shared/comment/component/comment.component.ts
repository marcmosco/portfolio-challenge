import { Component, Input, OnInit } from '@angular/core';
import { CommentModel } from '../../model/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input('comment') comment: CommentModel;

  constructor() {}

  ngOnInit(): void {}
}