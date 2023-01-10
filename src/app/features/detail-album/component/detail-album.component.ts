import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { DetailAlbumService } from '../service/detail-album.service';
import { PhotoModel } from '../../../shared/model/photo.model';
import { AlbumModel } from '../../../shared/model/album.model';

@Component({
  selector: 'app-detail-album',
  templateUrl: './detail-album.component.html',
  styleUrls: ['./detail-album.component.scss'],
})
export class DetailAlbumComponent implements OnInit {
  albumModel: AlbumModel;
  listPhotos: PhotoModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private detailAlbumService: DetailAlbumService
  ) {
    this.route.paramMap
      .pipe(
        switchMap((res) => {
          let id = res.get('id');
          return this.detailAlbumService.getAlbumById(id!);
        }),
        switchMap((res) => {
          this.albumModel = res;
          return this.detailAlbumService.getPhotosFromAlbumId(
            this.albumModel.id
          );
        })
      )
      .subscribe((res) => {
        this.listPhotos = res;
      });
  }

  ngOnInit() {}
}
