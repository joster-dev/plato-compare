import { LachesCharacter } from './laches-character.enum';

export interface Turn<T> {
  character: T;
  speech: string[];
}
