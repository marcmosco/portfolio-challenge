import { AlbumModel } from './album.model';
import { PostModel } from './post.model';

export interface PhotoModel {
  userId: number;
  postId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  post: PostModel;
  album: AlbumModel;
}
