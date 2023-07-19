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
import { ContentLoaderComponent } from './content-loader/content-loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ToolbarComponent,
    SideNavComponent,
    PhotoCardComponent,
    ModalDetailPhotoComponent,

    CommentComponent,
    ContentLoaderComponent,
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    FontAwesomeModule,
    ReactiveFormsModule,
    EllipsisModule,
    MatProgressSpinnerModule,
    OverlayModule,
    MatButtonModule,
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
    ContentLoaderComponent,
    OverlayModule,
  ],
})
export class SharedModule {}
