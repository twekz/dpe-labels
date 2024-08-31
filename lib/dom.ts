import { renderSVGSprite } from './render';
import initDPE from './init.ts';
import parseOptions, { type DPEDataset } from './dataset.ts';

export function initAllDPE () {
  // Init: load SVG sprite
  document.body.insertAdjacentHTML('beforeend', renderSVGSprite());

  // Detect all DPE divs
  const instances: NodeListOf<HTMLDivElement> = document.querySelectorAll('div[data-dpe]');

  // Render
  instances.forEach(instance => {
    // Type can be cast because of the document.querySelectorAll() selector above:
    const options = parseOptions(instance.dataset as unknown as DPEDataset);
    instance.innerHTML = initDPE(options);
  });
}

initAllDPE();
