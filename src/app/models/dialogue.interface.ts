import { Translation } from './translation.interface';

export interface Dialogue<T = unknown> {
  title: string;
  safeTitle: string;
  emoji: string;
  translations: Translation<T>[];
}
