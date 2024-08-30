import { type DPEGrade, GRADES } from './logic.ts';

/**
 * Helper for value validation and type assertion.
 * @param str
 */
export function isDpeGrade (str: string): str is DPEGrade {
  return GRADES.some(el => el === str);
}
