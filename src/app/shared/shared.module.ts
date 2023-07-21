import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PhotoCardComponent } from './photo-card/component/photo-card.component';
import { ModalDetailPhotoComponent } from './modal-detail-photo/component/modal-detail-photo.component';
import { CommentComponent } from './comment/component/comment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EllipsisModule } from 'ngx-ellipsis';
import { ContentLoaderComponent } from './content-loader/component/content-loader.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { HeaderComponent } from './template/header/header.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    PhotoCardComponent,
    ModalDetailPhotoComponent,
    HeaderComponent,
    CommentComponent,
    ContentLoaderComponent,
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    FontAwesomeModule,
    ReactiveFormsModule,
    OverlayModule,
    MaterialModule,
  ],

  exports: [
    CommonModule,
    RouterLinkWithHref,
    FontAwesomeModule,
    PhotoCardComponent,
    CommentComponent,
    ReactiveFormsModule,
    EllipsisModule,
    ContentLoaderComponent,
    HeaderComponent,
    OverlayModule,
    MaterialModule,
  ],
})
export class SharedModule {}
