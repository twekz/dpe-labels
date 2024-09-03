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

    initDPE({ type: 'full' });
    initDPE({ type: 'full', altitude: true });
    initDPE({ type: 'full', surface: 123 });

    expect(spy).toHaveBeenNthCalledWith(1, undefined, undefined);
    expect(spy).toHaveBeenNthCalledWith(2, true, undefined);
    expect(spy).toHaveBeenNthCalledWith(3, undefined, 123);
  });

  it('should compute the right graph parameters', () => {
    const STEPS = [1, 2, 3];
    vi.spyOn(stepsModule, 'getSteps').mockReturnValue({ cep: STEPS, eges: STEPS });
    const getGradeSpy = vi.spyOn(logicModule, 'getGrade').mockReturnValue('B');
    const getValuesRangeFromGradeSpy = vi.spyOn(logicModule, 'getValuesRangeFromGrade').mockReturnValue('1–42');

    initDPE({ type: 'full', egesValue: 123, cepValue: 45.6 });
    initDPE({ type: 'full', egesGrade: 'C', cepGrade: 'D' });

    expect(getGradeSpy).toHaveBeenCalledWith(123, STEPS);
    expect(getGradeSpy).toHaveBeenCalledWith(45.6, STEPS);
    expect(getValuesRangeFromGradeSpy).toHaveBeenCalledWith('C', STEPS);
    expect(getValuesRangeFromGradeSpy).toHaveBeenCalledWith('D', STEPS);
  });

  it('should not compute "grade" graph property when provided as a parameter', () => {
    const getGradeSpy = vi.spyOn(logicModule, 'getGrade');

    initDPE({ type: 'full', egesValue: 123, egesGrade: 'C' });
    initDPE({ type: 'full', cepGrade: 'C' });

    expect(getGradeSpy).not.toHaveBeenCalled();
  });

  it('should not compute "value" graph property when provided as a parameter', () => {
    const getValuesRangeFromGradeSpy = vi.spyOn(logicModule, 'getValuesRangeFromGrade');

    initDPE({ type: 'full', egesValue: 123, egesGrade: 'C' });
    initDPE({ type: 'full', cepValue: 45.6 });

    expect(getValuesRangeFromGradeSpy).not.toHaveBeenCalled();
  });

  it('should always call a render function, even without values', () => {
    const renderDpeSpy = vi.spyOn(renderModule, 'renderDPE');
    const renderCepSpy = vi.spyOn(renderModule, 'renderCEP');
    const renderEgesSpy = vi.spyOn(renderModule, 'renderEGES');

    const res1 = initDPE({ type: 'full' });
    const res2 = initDPE({ type: 'cep' });
    const res3 = initDPE({ type: 'eges' });

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

  it('should handle which CEP grade to display', () => {
    const getMainGrade = vi.spyOn(logicModule, 'getMainGrade');

    initDPE({ type: 'full', cepGrade: 'A', egesGrade: 'F' });
    initDPE({ type: 'cep', cepGrade: 'C', egesGrade: 'B' });

    expect(getMainGrade).toHaveBeenCalledTimes(2);
  });
});
