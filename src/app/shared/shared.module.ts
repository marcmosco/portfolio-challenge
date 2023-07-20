import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { HeaderComponent } from './template/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

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
    EllipsisModule,
    MatProgressSpinnerModule,
    OverlayModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatBadgeModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
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
  ],
})
export class SharedModule {}
