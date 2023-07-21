import { NgModule } from '@angular/core';
import { DetailAlbumRoutingModule } from './detail-album-routing.module';
import { DetailAlbumComponent } from './component/detail-album.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [DetailAlbumComponent],
  imports: [DetailAlbumRoutingModule, SharedModule],
})
export class DetailAlbumModule {}
