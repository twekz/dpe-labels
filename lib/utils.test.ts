import { describe, expect, it } from 'vitest';
import { isDpeGrade } from './utils.ts';
import { GRADES } from './logic.ts';

describe('isDpeGrade()', () => {
  it('should recognize a DPE grade', () => {
    GRADES.forEach(grade => {
      expect(isDpeGrade(grade)).toBe(true);
    });
  });
  it('should handle other values', () => {
    expect(isDpeGrade('')).toBe(false);
    expect(isDpeGrade('X')).toBe(false);
    expect(isDpeGrade('42')).toBe(false);
  });
});
