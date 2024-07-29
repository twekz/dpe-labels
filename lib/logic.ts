import sortedIndex from 'lodash/sortedIndex';

export const GRADES = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
export const CEP_STEPS = [70, 110, 180, 250, 330, 420];
export const EGES_STEPS = [6, 11, 30, 50, 70, 100];

export function getPosition (value: number, array: number[]): number {
  const index = sortedIndex(array, value);
  return value === array[index] ? index + 1 : index;
}

export function getGrade (value: number, steps: number[]): string {
  const position = getPosition(value, steps);
  return GRADES[position];
}

export function getCEP (value: number) {
  return getGrade(value, CEP_STEPS);
}
export function getEGES (value: number) {
  return getGrade(value, EGES_STEPS);
}

export function getLowestGrade (cepGrade: string, egesGrade: string) {
  return GRADES[Math.max(GRADES.indexOf(cepGrade), GRADES.indexOf(egesGrade))];
}

// export function getDiagnosisFromValues(cep: number, eges: number): string {}
