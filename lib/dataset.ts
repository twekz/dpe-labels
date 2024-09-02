import { type DPEOptions, type DPEType } from './init.ts';
import { isDpeGrade } from './utils.ts';
import { type DPEGrade } from './logic.ts';

export interface DPEDataset {
  dpe: string;
  dpeCep?: string;
  dpeCepGrade?: string;
  dpeEges?: string;
  dpeEgesGrade?: string;
  dpeAltitude?: string;
  dpeSurface?: string;
  dpeMessage?: string;
}

/**
 * Parse the DPE type from a dataset string.
 * @param str
 */
export function parseDpeType (str: string): DPEType {
  if (str.toLowerCase() === 'cep') { return 'cep'; }
  if (str.toLowerCase() === 'eges') { return 'eges'; }
  return 'full';
}

/**
 * Parse a DPE grade from a dataset string.
 * @param str
 */
export function parseDpeGrade (str: string | undefined): DPEGrade | undefined {
  str = str?.trim().toUpperCase();
  return str != null && isDpeGrade(str) ? str : undefined;
}

/**
 * Cleanup format and parse a dataset string into a float.
 * @param str
 */
export function parseNumber (str: string = ''): number {
  return parseFloat(str.trim().replace(/\s+/g, '').replace(/,+/g, '.'));
}

/**
 * Parse a dataset string into a boolean. Falsy values: `undefined`, `"0"`, `"false"`. Anything else is truthy.
 * @param str
 */
export function parseBoolean (str: string | undefined): boolean {
  return str != null && str !== '0' && str !== 'false';
}

/**
 * Trim and sanitize a dataset string.
 * @param str
 */
export function parseString (str: string): string {
  return str.trim().replace(/&+/g, '&amp;').replace(/<+/g, '&lt;').replace(/>+/g, '&gt;').replace(/"+/g, '&quot;');
}

/**
 * Helper object to facilitate testing.
 * @ignore
 */
export const parsers = {
  parseDpeType,
  parseDpeGrade,
  parseNumber,
  parseBoolean,
  parseString,
};

/**
 * Extract all plugin options from the initial HTMLElement data-* attributes.
 * @default
 * @param dataset
 */
function parseOptionsFromDataset (dataset: DPEDataset): DPEOptions {
  const {
    dpe,
    dpeCep,
    dpeCepGrade,
    dpeEges,
    dpeEgesGrade,
    dpeAltitude,
    dpeSurface,
    dpeMessage,
  } = dataset;

  const result: DPEOptions = {
    type: parsers.parseDpeType(dpe),
  };

  // Grades
  const _cepGrade = parsers.parseDpeGrade(dpeCepGrade);
  if (_cepGrade != null) {
    result.cepGrade = _cepGrade;
  }
  const _egesGrade = parsers.parseDpeGrade(dpeEgesGrade);
  if (_egesGrade != null) {
    result.egesGrade = _egesGrade;
  }

  // Numbers
  const cepValue = parsers.parseNumber(dpeCep);
  const egesValue = parsers.parseNumber(dpeEges);
  const surface = parsers.parseNumber(dpeSurface);
  if (!isNaN(cepValue)) { result.cepValue = cepValue; }
  if (!isNaN(egesValue)) { result.egesValue = egesValue; }
  if (!isNaN(surface)) { result.surface = surface; }

  // Booleans
  result.altitude = parsers.parseBoolean(dpeAltitude);

  // Strings
  if (dpeMessage != null && dpeMessage.trim() !== '') {
    result.message = parsers.parseString(dpeMessage);
  }

  return result;
}

export default parseOptionsFromDataset;
