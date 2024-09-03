import sortedIndex from 'lodash/sortedIndex';
import { isDpeGrade } from './utils.ts';

export const GRADES = ['A', 'B', 'C', 'D', 'E', 'F', 'G'] as const;

export type DPEGrade = typeof GRADES[number];

export function getPosition (value: number, array: number[]): number {
  const index = sortedIndex(array, value);
  return value === array[index] ? index + 1 : index;
}

export function getGrade (value: number, steps: number[]): DPEGrade {
  const position = getPosition(value, steps);
  return GRADES[position];
}

export function getMainGrade (userCepGrade: DPEGrade | '' = '', cepGrade: DPEGrade | '', egesGrade: DPEGrade | ''): DPEGrade | '' {
  return isDpeGrade(userCepGrade)
    ? userCepGrade
    : isDpeGrade(cepGrade) && isDpeGrade(egesGrade)
      ? getLowestGrade(cepGrade, egesGrade)
      : '';
}

export function getLowestGrade (cepGrade: DPEGrade, egesGrade: DPEGrade): DPEGrade {
  return GRADES[Math.max(GRADES.indexOf(cepGrade), GRADES.indexOf(egesGrade))];
}

export function getValuesRangeFromGrade (grade: DPEGrade, steps: number[]): string {
  const pos = GRADES.indexOf(grade);
  const floor = pos > 0 ? steps[pos - 1] : 0;
  if (pos === steps.length) {
    return `${floor}+`;
  }
  const ceil = steps[pos] - 1;
  return `${floor}–${ceil}`;
}
