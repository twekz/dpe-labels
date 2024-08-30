import { getSteps } from './steps.ts';
import { type DPEGrade, getGrade, getLowestGrade, getValuesRangeFromGrade } from './logic.ts';
import { renderDPE, renderCEP, renderEGES } from './render';
import parseOptions from './dataset.ts';
import { isDpeGrade } from './utils.ts';

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

export type DPEType = 'full' | 'cep' | 'eges';

export interface DPEOptions {
  type: DPEType;
  cepValue?: number;
  cepGrade?: DPEGrade;
  egesValue?: number;
  egesGrade?: DPEGrade;
  altitude?: boolean;
  surface?: number;
  message?: string;
}

interface DPEGraphParams {
  value: string;
  grade: DPEGrade | '';
}

function computeDpeGraphParams (_val: number | undefined, _grade: DPEGrade | undefined, steps: number[]): DPEGraphParams {
  const grade = _grade != null
    // Display passed grade parameter:
    ? _grade
    : _val != null
      // Compute grade from value parameter:
      ? getGrade(_val, steps)
      : '';
  const value = _val != null
    // Display passed value parameter:
    ? _val.toString()
    : _grade != null
      // Display values range from passed grade parameter:
      ? getValuesRangeFromGrade(_grade, steps)
      : '';
  return { value, grade };
}

function initDPE (dataset: DPEDataset): string {
  const {
    type,
    cepValue: _cepValue,
    cepGrade: _cepGrade,
    egesValue: _egesValue,
    egesGrade: _egesGrade,
    altitude,
    surface,
  } = parseOptions(dataset);

  const steps = getSteps(altitude, surface);

  // EGES
  const { grade: egesGrade, value: egesValue } = computeDpeGraphParams(_egesValue, _egesGrade, steps.eges);
  if (type === 'eges') {
    return renderEGES(egesGrade, egesValue);
  }

  // CEP
  const { grade: cepGrade, value: cepValue } = computeDpeGraphParams(_cepValue, _cepGrade, steps.cep);
  const mainGrade = isDpeGrade(cepGrade) && isDpeGrade(egesGrade)
    ? getLowestGrade(cepGrade, egesGrade)
    : '';

  if (type === 'cep') {
    return renderCEP(mainGrade, cepValue, egesValue);
  }

  // Full
  return renderDPE(mainGrade, egesGrade, cepValue, egesValue);
}

export default initDPE;
