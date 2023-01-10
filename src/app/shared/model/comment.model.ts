import { UserModel } from './user.model';

export interface CommentModel {
  photoId: number;
  id?: number;
  userId: number;
  body: string;
  creationDate: string;
  user?: UserModel;
}
