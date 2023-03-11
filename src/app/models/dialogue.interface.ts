import { Turn } from './turn.interface';

export interface Dialogue<T> {
  title: string;
  translations: Turn<T>[][];
}
