import { afterEach, describe, expect, it, vi } from 'vitest';
import parseOptions, { parseDpeGrade, parseBoolean, parseDpeType, parseNumber, parseString, parsers } from './dataset.ts';

describe('parseDpeType()', () => {
  it('should return a DPE type', () => {
    expect(parseDpeType('CeP')).toBe('cep');
    expect(parseDpeType('EGES')).toBe('eges');
    expect(parseDpeType('test42')).toBe('full');
    expect(parseDpeType('')).toBe('full');
  });
});

describe('parseDpeGrade()', () => {
  it('should return a DPE grade', () => {
    expect(parseDpeGrade('a')).toBe('A');
    expect(parseDpeGrade(' b  ')).toBe('B');
    expect(parseDpeGrade('C')).toBe('C');
  });
  it('should return undefined otherwise', () => {
    expect(parseDpeGrade(undefined)).toBe(undefined);
    expect(parseDpeGrade('')).toBe(undefined);
    expect(parseDpeGrade('foo')).toBe(undefined);
    expect(parseDpeGrade('42')).toBe(undefined);
  });
});

describe('parseNumber()', () => {
  it('should handle different number formats', () => {
    expect(parseNumber('123')).toBe(123);
    expect(parseNumber('  1 234  ')).toBe(1234);
    expect(parseNumber('123.45')).toBe(123.45);
    expect(parseNumber('123,45')).toBe(123.45);
    expect(parseNumber(' 1 234, 56')).toBe(1234.56);
    expect(parseNumber('1e2')).toBe(100);
  });
  it('should return NaN when necessary', () => {
    expect(parseNumber()).toBeNaN();
    expect(parseNumber(undefined)).toBeNaN();
    expect(parseNumber('')).toBeNaN();
    expect(parseNumber('abc')).toBeNaN();
    expect(parseNumber('null')).toBeNaN();
    expect(parseNumber('false')).toBeNaN();
  });
});

describe('parseBoolean()', () => {
  it('should return true for a truthy-like string value', () => {
    expect(parseBoolean('')).toBe(true);
    expect(parseBoolean('1')).toBe(true);
    expect(parseBoolean('true')).toBe(true);
    expect(parseBoolean('test42')).toBe(true);
    expect(parseBoolean('null')).toBe(true);
    expect(parseBoolean('undefined')).toBe(true);
  });
  it('should return false for a falsy-like string value', () => {
    expect(parseBoolean(undefined)).toBe(false);
    expect(parseBoolean('0')).toBe(false);
    expect(parseBoolean('false')).toBe(false);
  });
});

describe('parseString()', () => {
  it('should trim and sanitize a string', () => {
    expect(parseString('   test foo bar ')).toBe('test foo bar');
    expect(parseString('<a href="https://test.com?query&string">Danger</a>')).toBe('&lt;a href=&quot;https://test.com?query&amp;string&quot;&gt;Danger&lt;/a&gt;');
  });
});

describe('parseOptionsFromDataset()', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should always return at least type and altitude', () => {
    const parseDpeTypeSpy = vi.spyOn(parsers, 'parseDpeType').mockReturnValue('full');
    const parseBooleanSpy = vi.spyOn(parsers, 'parseBoolean').mockReturnValue(false);

    const result = parseOptions({ dpe: '' });

    expect(parseDpeTypeSpy).toHaveBeenCalledTimes(1);
    expect(parseDpeTypeSpy).toHaveBeenCalledWith('');
    expect(parseBooleanSpy).toHaveBeenCalledTimes(1);
    expect(parseBooleanSpy).toHaveBeenCalledWith(undefined);
    expect(result).toStrictEqual({ type: 'full', altitude: false });
  });

  it('should return all properties passed as parameters', () => {
    const parseDpeTypeSpy = vi.spyOn(parsers, 'parseDpeType').mockReturnValue('full');
    const parseDpeGradeSpy = vi.spyOn(parsers, 'parseDpeGrade').mockReturnValue('C');
    const parseNumberSpy = vi.spyOn(parsers, 'parseNumber').mockReturnValue(123.45);
    const parseBooleanSpy = vi.spyOn(parsers, 'parseBoolean').mockReturnValue(true);
    const parseStringSpy = vi.spyOn(parsers, 'parseString').mockReturnValue('test');

    const result = parseOptions({
      dpe: '',
      dpeCep: '123',
      dpeCepGrade: 'A',
      dpeEges: '123',
      dpeEgesGrade: 'A',
      dpeAltitude: '',
      dpeSurface: '123',
      dpeMessage: 'Hello',
    });

    expect(parseDpeTypeSpy).toHaveBeenCalledTimes(1);
    expect(parseDpeGradeSpy).toHaveBeenCalledTimes(2);
    expect(parseNumberSpy).toHaveBeenCalledTimes(3);
    expect(parseBooleanSpy).toHaveBeenCalledTimes(1);
    expect(parseStringSpy).toHaveBeenCalledTimes(1);
    expect(result).toStrictEqual({
      type: 'full',
      cepValue: 123.45,
      cepGrade: 'C',
      egesValue: 123.45,
      egesGrade: 'C',
      altitude: true,
      surface: 123.45,
      message: 'test',
    });
  });

  it('should not return NaN values', () => {
    const result = parseOptions({ dpe: '', dpeCep: 'X', dpeSurface: 'foo' });

    expect(result.cepValue).toBe(undefined);
    expect(result.egesValue).toBe(undefined);
    expect(result.surface).toBe(undefined);
  });

  it('should not return undefined DPE grades', () => {
    const result = parseOptions({ dpe: '', dpeCepGrade: 'Foo', dpeEgesGrade: '42' });

    expect(result.cepGrade).toBe(undefined);
    expect(result.egesGrade).toBe(undefined);
  });

  it('should handle string casing properly', () => {
    const result = parseOptions({ dpe: 'CEp', dpeCepGrade: 'f', dpeMessage: ' Message' });

    expect(result.type).toBe('cep');
    expect(result.cepGrade).toBe('F');
    expect(result.message).toBe('Message');
  });
});
