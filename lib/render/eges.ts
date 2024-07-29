import { GRADES } from '../logic.ts';

function renderEGESRow (grade: string, _row: string, eges: number): string {
  const active = grade === _row;
  let row = `<div class="dpe-table-row${active ? ' active' : ''}">
  <div class="dpe-table-cell--bar">
    <div class="dpe-bar">
      <div class="dpe-bar-tail"><span>${_row}</span></div>
      <div class="dpe-bar-end"><svg class="dpe-bar-end-shape"><use xlink:href="#dpe-bar-end-shape--eges" /></svg></div>
    </div>
  </div>
  <div class="dpe-table-cell">`;
  if (active) {
    row += `<div class="dpe-label">
      <div class="dpe-value">
        <div class="dpe-value-nb">${eges}</div>
        <div class="dpe-value-legend">kg&nbsp;CO<sub>2</sub>/m<sup>2</sup>/an</div>
      </div>
    </div>`;
  }
  row += '</div></div>';
  return row;
}

function renderEGESRows (grade: string, eges: number): string {
  let rows = '';
  GRADES.forEach((row) => {
    rows += renderEGESRow(grade, row, eges);
  });
  return rows;
}

export function renderEGES (egesGrade: string, eges: number): string {
  return `<figure class="dpe dpe--eges">
    <figcaption>* Dont émissions de gaz à effet de serre</figcaption>
    <div class="dpe-table">
      <div class="dpe-table-row dpe-legend">
        <div class="dpe-table-cell">Peu d'émissions de CO<sub>2</sub></div>
      </div>
      ${renderEGESRows(egesGrade, eges)}
      <div class="dpe-table-row dpe-legend">
        <div class="dpe-table-cell">Émissions de CO<sub>2</sub> très importantes</div>
      </div>
    </div>
  </figure>`;
}
