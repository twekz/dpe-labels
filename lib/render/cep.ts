import { GRADES } from '../logic.ts';

function renderCEPRow (grade: string, _row: string, cep: string, eges: string) {
  const isActive = grade === _row;
  const classes = ['dpe-table-row'];
  if (_row === 'F' || _row === 'G') { classes.push('dpe-passoire'); }
  if (isActive) { classes.push('active'); }
  let row = `<div class="${classes.join(' ')}"><div class="dpe-table-cell">`;
  if (isActive) {
    row += `<div class="dpe-values">
      <div class="dpe-value">
        <div class="dpe-value-title" style="margin-top:-4.5em">consommation<div>(énergie primaire)</div></div>
        <div class="dpe-value-nb">${cep}</div>
        <div class="dpe-value-legend"><span>kWh/m<sup>2</sup></span><span>/an</span></div>
      </div>
      <div class="dpe-value">
        <div class="dpe-value-title" style="margin-top:-3em">émissions</div>
        <div class="dpe-value-nb">${eges}*</div>
        <div class="dpe-value-legend"><span>kg</span>&nbsp;<span>CO<sub>2</sub></span><span>/m<sup>2</sup></span><span>/an</span></div>
      </div>
    </div>`;
  }
  row += `</div>
  <div class="dpe-table-cell--bar">
    <div class="dpe-bar">
      <div class="dpe-bar-tail"><span>${_row}</span></div>
      <div class="dpe-bar-end"><svg class="dpe-bar-end-shape"><use xlink:href="#dpe-bar-end-shape--cep" /></svg></div>
    </div>
  </div>
</div>`;
  return row;
}

function renderCEPRows (grade: string, cep: string, eges: string) {
  let rows = '';
  GRADES.forEach((row) => {
    rows += renderCEPRow(grade, row, cep, eges);
  });
  return rows;
}

function renderPassoireLegend (globalGrade: string): string {
  if (globalGrade === 'F' || globalGrade === 'G') return '';
  return '<div class="dpe-passoire-legend">passoire énergétique</div>';
}

export function renderCEP (globalGrade: string, cep: string, eges: string) {
  return `<figure class="dpe dpe--cep">
      <div class="dpe-table">
        <div class="dpe-table-row dpe-legend">
          <div class="dpe-table-cell"></div>
          <div class="dpe-table-cell--legend">Logement extrêmement performant</div>
        </div>
      </div>
      <div class="dpe-table">
        ${renderCEPRows(globalGrade, cep, eges)}
        ${renderPassoireLegend(globalGrade)}
      </div>
      <div class="dpe-table">
        <div class="dpe-table-row dpe-legend">
          <div class="dpe-table-cell"></div>
          <div class="dpe-table-cell--legend">Logement extrêmement peu performant</div>
        </div>
      </div>
    </figure>`;
}
