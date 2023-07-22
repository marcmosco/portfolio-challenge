import { AuthorModel } from './author.model';

export interface AlbumModel {
  id: number;
  title: string;
  authorId: number;
  author: AuthorModel;
}
