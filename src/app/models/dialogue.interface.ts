import { Commentary } from './commentary.interface';
import { Translation } from './translation.interface';

export interface Dialogue<T = unknown> {
  title: string;
  safeTitle: string;
  translations: Translation<T>[];
  commentaries: Commentary[];
}
