import { afterEach, describe, expect, it, vi } from 'vitest';
import * as stepsModule from './steps.ts';
import * as renderModule from './render';
import * as logicModule from './logic';
import initDPE from './init.ts';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('initDPE()', () => {
  it('should always get the correct DPE steps', () => {
    const spy = vi.spyOn(stepsModule, 'getSteps');

    initDPE({ dpe: '' });
    initDPE({ dpe: '', dpeAltitude: '' });
    initDPE({ dpe: '', dpeSurface: '123' });

    expect(spy).toHaveBeenNthCalledWith(1, false, undefined);
    expect(spy).toHaveBeenNthCalledWith(2, true, undefined);
    expect(spy).toHaveBeenNthCalledWith(3, false, 123);
  });

  it('should compute the right graph parameters', () => {
    const STEPS = [1, 2, 3];
    vi.spyOn(stepsModule, 'getSteps').mockReturnValue({ cep: STEPS, eges: STEPS });
    const getGradeSpy = vi.spyOn(logicModule, 'getGrade').mockReturnValue('B');
    const getValuesRangeFromGradeSpy = vi.spyOn(logicModule, 'getValuesRangeFromGrade').mockReturnValue('1–42');

    initDPE({ dpe: '', dpeEges: '123', dpeCep: '45.6' });
    initDPE({ dpe: '', dpeEgesGrade: 'C', dpeCepGrade: 'D' });

    expect(getGradeSpy).toHaveBeenCalledWith(123, STEPS);
    expect(getGradeSpy).toHaveBeenCalledWith(45.6, STEPS);
    expect(getValuesRangeFromGradeSpy).toHaveBeenCalledWith('C', STEPS);
    expect(getValuesRangeFromGradeSpy).toHaveBeenCalledWith('D', STEPS);
  });

  it('should not compute "grade" graph property when provided as a parameter', () => {
    const getGradeSpy = vi.spyOn(logicModule, 'getGrade');

    initDPE({ dpe: '', dpeEges: '123', dpeEgesGrade: 'C' });
    initDPE({ dpe: '', dpeCepGrade: 'C' });

    expect(getGradeSpy).not.toHaveBeenCalled();
  });

  it('should not compute "value" graph property when provided as a parameter', () => {
    const getValuesRangeFromGradeSpy = vi.spyOn(logicModule, 'getValuesRangeFromGrade');

    initDPE({ dpe: '', dpeEges: '123', dpeEgesGrade: 'C' });
    initDPE({ dpe: '', dpeCep: '45.6' });

    expect(getValuesRangeFromGradeSpy).not.toHaveBeenCalled();
  });

  it('should always call a render function, even without values', () => {
    const renderDpeSpy = vi.spyOn(renderModule, 'renderDPE');
    const renderCepSpy = vi.spyOn(renderModule, 'renderCEP');
    const renderEgesSpy = vi.spyOn(renderModule, 'renderEGES');

    const res1 = initDPE({ dpe: '' });
    const res2 = initDPE({ dpe: 'cep' });
    const res3 = initDPE({ dpe: 'eges' });

    expect(res1).toBeTypeOf('string');
    expect(renderDpeSpy).toHaveBeenCalledTimes(1);
    expect(renderDpeSpy).toHaveBeenCalledWith('', '', '', '');
    expect(res2).toBeTypeOf('string');
    expect(renderCepSpy).toHaveBeenCalledTimes(1);
    expect(renderCepSpy).toHaveBeenCalledWith('', '', '');
    expect(res3).toBeTypeOf('string');
    expect(renderEgesSpy).toHaveBeenCalledTimes(1);
    expect(renderEgesSpy).toHaveBeenCalledWith('', '');
  });

  it('should display the lowest grade in DPE graphs', () => {
    const getLowestGradeSpy = vi.spyOn(logicModule, 'getLowestGrade');

    initDPE({ dpe: '', dpeCepGrade: 'A', dpeEgesGrade: 'F' });
    initDPE({ dpe: 'cep', dpeCepGrade: 'C', dpeEgesGrade: 'B' });

    expect(getLowestGradeSpy).toHaveBeenCalledTimes(2);
  });
});
