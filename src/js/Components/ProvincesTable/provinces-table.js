import provLookup from '../../../data/prov-codes.json';
import css from './provinces-table.css';


// VARS
const responsiveBreakpoint = 500;


const init = async (data, el) => {
	let tableRows = '';

	// add thead
	let tableString = prepTable();
	console.log(data)

	data.forEach(d => {
		tableRows += rowTemplate(d);
	});

	// add rows to the table
	tableString += tableRows;

	// close out the html tags
	tableString += closeTable();

	console.log(document.getElementById(el))

	// add table to document
	document.getElementById(el).innerHTML = tableString;
}

function closeTable() {
	return `
		</tbody></table>
	`;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function prepTable() {
	return `
		<table id="table-container">
			<thead>
				<tr>
					<th class="province">Province</th>
					<th class="cases-million">Cases per million</th>
					<th class="active">Active Cases</th>
					<th class="deaths">Deaths</th>
					<th class="recovered">Recovered</th>
				</tr>
			</thead>
			<tbody>
	`;
}

function rowTemplate(d) {
	console.log(d)

	let name = window.innerWidth < responsiveBreakpoint ? d.short_name : d.prname;

	return `
		<tr>
			<td class="province">${name}</td>
			<td class="cases-million">${numberWithCommas(d.active_cases_per_million)}</td>
			<td class="active">${numberWithCommas(d.active_cases + parseInt(d.numprob))}</td>
			<td class="deaths">${numberWithCommas(d.numdeaths)}</td>
			<td class="recovered">${numberWithCommas(d.numrecover)}</td>
		</tr>
	`;
}

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
	return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

export default init;