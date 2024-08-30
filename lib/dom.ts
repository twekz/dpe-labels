import { renderSVGSprite } from './render';
import initDPE, { type DPEDataset } from './init.ts';

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
  instances.forEach(instance => {
    // Type can be cast because of the document.querySelectorAll() selector above:
    instance.innerHTML = initDPE(instance.dataset as unknown as DPEDataset);
  });
});
