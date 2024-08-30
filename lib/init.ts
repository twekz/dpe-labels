import { renderDPE, renderSVGSprite } from './render';
import { renderCEP } from './render/cep.ts';
import { renderEGES } from './render/eges.ts';
import { getGrade, getLowestGrade } from './logic.ts';
import { getSteps } from './steps.ts';

// https://youmightnotneedjquery.com/#ready
function ready (fn: () => void): void {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(() => {
  // Init: load SVG sprite
  document.body.insertAdjacentHTML('beforeend', renderSVGSprite());

  // Detect all DPE divs
  const instances: NodeListOf<HTMLDivElement> = document.querySelectorAll('div[data-dpe]');

  // Render
  const errors: string[] = [];
  instances.forEach(instance => {
    const { dpe: type, dpeCep: cep, dpeEges: eges, dpeAltitude: _altitude, dpeSurface: _surface } = instance.dataset;

    const altitude = _altitude != null;
    const surface = _surface != null && !isNaN(parseInt(_surface)) ? parseInt(_surface) : undefined;
    const steps = getSteps(altitude, surface);

    // EGES

    if (eges == null) {
      errors.push('EGES value is missing.');
      return;
    }

    const egesVal = parseInt(eges);
    if (isNaN(parseInt(eges))) {
      errors.push(`EGES value "${eges}" must be a valid integer.`);
      return;
    }

    const egesGrade = getGrade(egesVal, steps.eges);

    if (type === 'eges') {
      instance.innerHTML = renderEGES(egesGrade, egesVal);
      return;
    }

    // CEP

    if (cep == null) {
      errors.push('CEP value is missing.');
      return;
    }

    const cepVal = parseInt(cep);
    if (isNaN(cepVal)) {
      errors.push(`CEP value "${cep}" must be a valid integer.`);
      return;
    }

    const cepGrade = getGrade(cepVal, steps.cep);
    const globalGrade = getLowestGrade(cepGrade, egesGrade);

    if (type === 'cep') {
      instance.innerHTML = renderCEP(globalGrade, cepVal, egesVal);
    } else {
      instance.innerHTML = renderDPE(globalGrade, egesGrade, cepVal, egesVal);
    }
  });

  // Throw all lib errors to client
  throw new Error(`[dpe-labels] ${errors.join(' ')}`);
});
