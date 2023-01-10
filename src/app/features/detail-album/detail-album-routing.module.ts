import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailAlbumComponent } from './component/detail-album.component';

const routes: Routes = [{ path: ':id', component: DetailAlbumComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailAlbumRoutingModule {}
