import { renderCEP } from './cep.ts';
import { renderEGES } from './eges.ts';
import { type DPEGrade } from '../logic.ts';

export function renderSVGSprite (): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
  <symbol id="dpe-bar-end-shape--cep" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="m0 0 99 50-99 50" vector-effect="non-scaling-stroke" />
  </symbol>
  <symbol id="dpe-bar-end-shape--eges" viewBox="0 0 50 100" preserveAspectRatio="xMinYMax meet">
    <circle cy="50" r="49" vector-effect="non-scaling-stroke" />
  </symbol>
</svg>`;
}

export function renderDPE (globalGrade: DPEGrade, egesGrade: DPEGrade, cep: number, eges: number): string {
  return `
<div class="dpe-row">
  <div class="dpe-col">
    ${renderCEP(globalGrade, cep, eges)}
  </div>
  <div class="dpe-col">
    ${renderEGES(egesGrade, eges)}
  </div>
</div>`;
}
