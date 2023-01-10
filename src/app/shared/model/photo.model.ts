import { AlbumModel } from './album.model';

export interface PhotoModel {
  userId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  album: AlbumModel;
}
