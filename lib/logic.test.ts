import { expect, it, describe } from 'vitest';
import { getGrade, getPosition, getLowestGrade, getValuesRangeFromGrade } from './logic.ts';

const CEP_STEPS = [70, 110, 180, 250, 330, 420];
const EGES_STEPS = [6, 11, 30, 50, 70, 100];

describe('getPosition()', () => {
  it('should return the correct position in an array', () => {
    const list = [2, 7, 42];
    expect(getPosition(0, list)).toBe(0);
    expect(getPosition(1, list)).toBe(0);
    expect(getPosition(2, list)).toBe(1);
    expect(getPosition(3, list)).toBe(1);
    expect(getPosition(42, list)).toBe(3);
    expect(getPosition(123, list)).toBe(3);
  });
});

describe('getGrade()', () => {
  it('should return the correct grade for a given value', () => {
    expect(getGrade(0, CEP_STEPS)).toBe('A');
    expect(getGrade(42, CEP_STEPS)).toBe('A');
    expect(getGrade(70, CEP_STEPS)).toBe('B');
    expect(getGrade(110, CEP_STEPS)).toBe('C');
    expect(getGrade(142, CEP_STEPS)).toBe('C');
    expect(getGrade(400, CEP_STEPS)).toBe('F');
    expect(getGrade(420, CEP_STEPS)).toBe('G');
    expect(getGrade(1234, CEP_STEPS)).toBe('G');
  });
});

describe('getLowestGrade()', () => {
  it('should return the lowest of two grades', () => {
    expect(getLowestGrade('A', 'C')).toBe('C');
    expect(getLowestGrade('A', 'A')).toBe('A');
    expect(getLowestGrade('D', 'A')).toBe('D');
  });
});

describe('getValuesRangeFromGrade()', () => {
  it('should return the correct range', () => {
    expect(getValuesRangeFromGrade('A', CEP_STEPS)).toBe('0–69');
    expect(getValuesRangeFromGrade('C', CEP_STEPS)).toBe('110–179');
    expect(getValuesRangeFromGrade('G', CEP_STEPS)).toBe('420+');
    expect(getValuesRangeFromGrade('A', EGES_STEPS)).toBe('0–5');
    expect(getValuesRangeFromGrade('B', EGES_STEPS)).toBe('6–10');
    expect(getValuesRangeFromGrade('G', EGES_STEPS)).toBe('100+');
  });
});
