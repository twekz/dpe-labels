import { describe, expect, it, vi } from 'vitest';
import { getSteps } from './steps.ts';

vi.mock('./config.json', () => ({
  default: {
    surfaces: [10, 11, 12],
    default: {
      cep: [
        [11, 12, 13, 14],
        [21, 22, 23, 24],
        [31, 32, 33, 34],
      ],
      eges: [
        [41, 42, 43, 44],
        [51, 52, 53, 54],
        [61, 62, 63, 64],
      ],
    },
    altitude: {
      cep: [
        [15, 16],
        [25, 26],
        [35, 36],
      ],
      eges: [
        [45, 46],
        [55, 56],
        [65, 66],
      ],
    },
  },
}));

describe('getSteps()', () => {
  it('should use default values without parameters', () => {
    const result = getSteps();

    expect(result.cep).toEqual([31, 32, 33, 34]);
    expect(result.eges).toEqual([61, 62, 63, 64]);
  });

  it('should use altitude values when necessary', () => {
    const result = getSteps(true);

    expect(result.cep).toEqual([31, 32, 35, 36]);
    expect(result.eges).toEqual([61, 62, 65, 66]);
  });

  it('should handle surfaces parameter', () => {
    const res1 = getSteps(false, 6);
    const res2 = getSteps(false, 10);
    const res3 = getSteps(false, 11.3);
    const res4 = getSteps(false, 11.5);
    const res5 = getSteps(false, 12);
    const res6 = getSteps(false, 42);

    expect(res1.cep).toEqual([11, 12, 13, 14]);
    expect(res1.eges).toEqual([41, 42, 43, 44]);
    expect(res2.cep).toEqual(res1.cep);
    expect(res2.eges).toEqual(res1.eges);
    expect(res3.cep).toEqual([21, 22, 23, 24]);
    expect(res3.eges).toEqual([51, 52, 53, 54]);
    expect(res4.cep).toEqual([31, 32, 33, 34]);
    expect(res4.eges).toEqual([61, 62, 63, 64]);
    expect(res5.cep).toEqual(res4.cep);
    expect(res5.eges).toEqual(res4.eges);
    expect(res6.cep).toEqual(res5.cep);
    expect(res6.eges).toEqual(res5.eges);
  });
});
