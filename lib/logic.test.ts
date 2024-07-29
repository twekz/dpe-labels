import { expect, test } from 'vitest';
import { getPosition, getGrade, CEP_STEPS, getLowestGrade } from './logic.ts';

test('getPosition returns correct position', () => {
  const list = [2, 7, 42];
  expect(getPosition(0, list)).toBe(0);
  expect(getPosition(1, list)).toBe(0);
  expect(getPosition(2, list)).toBe(1);
  expect(getPosition(3, list)).toBe(1);
  expect(getPosition(42, list)).toBe(3);
  expect(getPosition(123, list)).toBe(3);
});

test('getGrade returns the correct grade', () => {
  expect(getGrade(0, CEP_STEPS)).toBe('A');
  expect(getGrade(42, CEP_STEPS)).toBe('A');
  expect(getGrade(70, CEP_STEPS)).toBe('B');
  expect(getGrade(110, CEP_STEPS)).toBe('C');
  expect(getGrade(142, CEP_STEPS)).toBe('C');
  expect(getGrade(400, CEP_STEPS)).toBe('F');
  expect(getGrade(420, CEP_STEPS)).toBe('G');
  expect(getGrade(1234, CEP_STEPS)).toBe('G');
});

test('getLowestGrade return lowest of two grades', () => {
  expect(getLowestGrade('A', 'C')).toBe('C');
  expect(getLowestGrade('A', 'A')).toBe('A');
  expect(getLowestGrade('D', 'A')).toBe('D');
});
