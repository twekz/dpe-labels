/**
 * @module GenerateConfig
 * Extracts the altitude and surface-based steps values from the official tables (stored in CSV format), reorganize them
 * and parse them into a config.json file used by the actual library.
 */

import { writeFileSync, createReadStream } from 'node:fs';
import { resolve } from 'path';
import { parse } from 'csv-parse';
import * as assert from 'node:assert';

interface RowValues {
  cep: number[];
  eges: number[];
}

// https://nodejs.org/docs/latest-v18.x/api/esm.html#no-__filename-or-__dirname
const __dirname = new URL('.', import.meta.url).pathname;

// Initialize result
const result = {
  surfaces: [] as number[],
  default: {
    cep: [] as number[][],
    eges: [] as number[][],
  },
  altitude: {
    cep: [] as number[][],
    eges: [] as number[][],
  },
};

/**
 * Get formatted (and validated) arrays of values from a CSV row
 * @param record
 */
function getValuesArrays (record: Record<string, string>): RowValues {
  const cepKeys = Object.keys(record).filter(key => /^CEP_/.test(key)).sort();
  const egesKeys = Object.keys(record).filter(key => /^EGES_/.test(key)).sort();
  assert.strictEqual(cepKeys.length, egesKeys.length, new Error('Config CSV input error: CEP and EGES keys have different lengths'));
  const data = {
    cep: cepKeys.map(k => parseInt(record[k])).filter(val => !isNaN(val)),
    eges: egesKeys.map(k => parseInt(record[k])).filter(val => !isNaN(val)),
  };
  assert.strictEqual(data.cep.length, data.eges.length, new Error('Config CSV input error: CEP and EGES values have different lengths (one value is probably not a number)'));
  return data;
}

/**
 * Creates a CSV parser
 * @param filename
 */
function createParser (filename: 'default' | 'altitude') {
  return createReadStream(resolve(__dirname, `./${filename}.csv`))
    .pipe(parse({
      columns: true,
      delimiter: ';',
    }));
}

/**
 * Populate global result with 'surface' and 'default' values
 */
const processDefaultValues = async () => {
  const parser = createParser('default');
  for await (const record of parser) {
    // Extract surface
    const surface = parseInt(record['S_REF']);
    if (isNaN(surface)) {
      throw new Error('Config CSV input error: surface value is not a number');
    }
    result.surfaces.push(surface);
    // Get values
    const { cep, eges } = getValuesArrays(record);
    result.default.cep.push(cep);
    result.default.eges.push(eges);
  }
};

/**
 * Populate global result with 'altitude' values
 */
const processAltitudeValues = async () => {
  const parser = createParser('altitude');
  for await (const record of parser) {
    const { cep, eges } = getValuesArrays(record);
    result.altitude.cep.push(cep);
    result.altitude.eges.push(eges);
  }
};

(async () => {
  // Process CSV files
  await processDefaultValues();
  await processAltitudeValues();

  // Dataset length validation
  assert.strictEqual(result.default.cep.length, result.default.eges.length, new Error('Compiled config error: default CEP and EGES have different lengths'));
  assert.strictEqual(result.altitude.cep.length, result.altitude.eges.length, new Error('Compiled config error: altitude CEP and EGES have different lengths'));

  // Global datasets lengths validation
  assert.strictEqual(result.default.cep.length, result.altitude.cep.length, new Error('Compiled config error: default and altitude CEP have different lengths'));
  assert.strictEqual(result.default.cep.length, result.surfaces.length, new Error('Compiled config error: surface array and default CEP have different lengths'));

  // Create final config JSON file
  writeFileSync(resolve(__dirname, '../lib/config.json'), JSON.stringify(result));
})();
