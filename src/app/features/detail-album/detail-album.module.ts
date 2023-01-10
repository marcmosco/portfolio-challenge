import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailAlbumRoutingModule } from './detail-album-routing.module';
import { DetailAlbumComponent } from './component/detail-album.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [DetailAlbumComponent],
  imports: [CommonModule, DetailAlbumRoutingModule, SharedModule],
})
export class DetailAlbumModule {}
