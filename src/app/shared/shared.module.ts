import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarComponent } from './template/toolbar/toolbar.component';

import { SideNavComponent } from './template/side-nav/component/side-nav.component';
import { RouterLinkWithHref } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PhotoCardComponent } from './photo-card/component/photo-card.component';
import { ModalDetailPhotoComponent } from './modal-detail-photo/component/modal-detail-photo.component';
import { CommentComponent } from './comment/comment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EllipsisModule } from 'ngx-ellipsis';

@NgModule({
  declarations: [
    ToolbarComponent,
    SideNavComponent,
    PhotoCardComponent,
    ModalDetailPhotoComponent,
    CommentComponent,
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    FontAwesomeModule,
    ReactiveFormsModule,
    EllipsisModule,
  ],

  exports: [
    ToolbarComponent,
    CommonModule,
    SideNavComponent,
    RouterLinkWithHref,
    FontAwesomeModule,
    PhotoCardComponent,
    CommentComponent,
    ReactiveFormsModule,
    EllipsisModule,
  ],
})
export class SharedModule {}
