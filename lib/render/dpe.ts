import { renderCEP } from './cep.ts';
import { renderEGES } from './eges.ts';

export function renderDPE (globalGrade: string, egesGrade: string, cep: string, eges: string): string {
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
