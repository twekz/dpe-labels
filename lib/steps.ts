import config from './config.json';

type GraphType = 'cep' | 'eges';
type StepsType = Record<GraphType, number[]>;

/**
 * Setup CEP & EGES steps values based on altitude and surface.
 * @param altitude
 * @param surface
 */
export function getSteps (altitude: boolean = false, surface?: number): StepsType {
  const { surfaces } = config;
  const data = { ...config.default };

  if (altitude) {
    (['cep', 'eges'] as GraphType[]).forEach((key) => {
      data[key] = data[key].map((_steps, i) => {
        const steps = Array.from(_steps);
        const items = config.altitude[key][i];
        // Replace last values from 'default' array with 'altitude' values
        steps.splice(steps.length - items.length, items.length, ...items);
        return steps;
      });
    });
  }

  const { cep, eges } = data;

  if (surface != null && surface < surfaces[surfaces.length - 1]) {
    surface = Math.round(surface);
    let index = surfaces.indexOf(surface);

    // Apply first surface steps values to smaller surfaces
    if (surface < surfaces[0]) {
      index = 0;
    }

    // TODO handle intermediate steps values interpolation as per regulations
    return {
      cep: cep[index],
      eges: eges[index],
    };
  }

  return {
    cep: cep[cep.length - 1],
    eges: eges[eges.length - 1],
  };
}
