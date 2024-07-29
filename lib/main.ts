import './style/index.scss';
import { renderDPE, renderSVGSprite } from './render';
import { renderCEP } from './render/cep.ts';
import { renderEGES } from './render/eges.ts';
import { getCEP, getEGES, getLowestGrade } from './logic.ts';

// https://youmightnotneedjquery.com/#ready
function ready (fn: () => void): void {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(() => {
  // document.querySelector<HTMLDivElement>('#app')!.innerHTML = render(211, 12)

  // Init: load SVG sprite
  document.body.insertAdjacentHTML('beforeend', renderSVGSprite());

  // Init: load CSS?

  // Detect all divs
  const instances: NodeListOf<HTMLDivElement> = document.querySelectorAll('div[data-dpe]');

  // Render
  const errors: string[] = [];
  instances.forEach(instance => {
    const { dpe: type, cep, eges } = instance.dataset;

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

    const egesGrade = getEGES(egesVal);

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

    const cepGrade = getCEP(cepVal);
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
