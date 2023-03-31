import { Turn } from './turn.interface';

export interface Translation<T = unknown> {
  translator: string;
  turns: Turn<T>[]
}
