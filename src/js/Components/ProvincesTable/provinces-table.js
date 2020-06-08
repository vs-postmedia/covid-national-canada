import helper from '../../helper-functions'
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

function prepTable() {
	return `

		<table id="table-container">
			<thead>
				<tr>
					<th class="province">Province</th>
					<th class="cases-million">Active cases per million</th>
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
			<td class="cases-million">${helper.numberWithCommas(d.active_cases_per_million)}</td>
			<td class="active">${helper.numberWithCommas(d.active_cases + parseInt(d.numprob))}</td>
			<td class="deaths">${helper.numberWithCommas(d.numdeaths)}</td>
			<td class="recovered">${helper.numberWithCommas(d.numrecover)}</td>
		</tr>
	`;
}

// HELPER FUNCTIONS


export default init;

// <h3>Active COVID-19 cases, deaths and recoveries by province</h3>