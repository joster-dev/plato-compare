import { Commentary } from './commentary.interface';
import { Translation } from './translation.interface';

export interface Dialogue {
  title: string;
  safeTitle: string;
  translations: Translation[];
  commentaries: Commentary[];
}
