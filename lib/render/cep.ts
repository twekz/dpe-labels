import { GRADES } from '../logic.ts';

function renderCEPRow (grade: string, _row: string, cep: number, eges: number) {
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
        <div class="dpe-value-legend">kWh/m<sup>2</sup>/an</div>
      </div>
      <div class="dpe-value">
        <div class="dpe-value-title" style="margin-top:-3em">émissions</div>
        <div class="dpe-value-nb">${eges}*</div>
        <div class="dpe-value-legend">kg&nbsp;CO<sub>2</sub>/m<sup>2</sup>/an</div>
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

function renderCEPRows (grade: string, cep: number, eges: number) {
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

export function renderCEP (globalGrade: string, cep: number, eges: number) {
  return `<figure class="dpe dpe--cep">
      <div class="dpe-table">
        <div class="dpe-table-row dpe-legend">
          <div class="dpe-table-cell"></div>
          <div class="dpe-table-cell">Logement extrêmement performant</div>
        </div>
        <div class="dpe-table-row-group">
          ${renderCEPRows(globalGrade, cep, eges)}
          ${renderPassoireLegend(globalGrade)}
        </div>
        <div class="dpe-table-row dpe-legend">
          <div class="dpe-table-cell"></div>
          <div class="dpe-table-cell">Logement extrêmement peu performant</div>
        </div>
      </div>
    </figure>`;
}
