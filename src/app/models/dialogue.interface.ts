import { Turn } from './turn.interface';

export interface Dialogue<T> {
  title: string;
  safeTitle: string;
  translations: Turn<T>[][];
}
