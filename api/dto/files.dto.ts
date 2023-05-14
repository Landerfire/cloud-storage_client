import { IUser } from './auth.dto';

export interface IFileItem {
  id: number;
  filename: string;
  originalName: string;
  size: number;
  mimetype: string;
  user: IUser;
  deletedAt: string | null;
}
