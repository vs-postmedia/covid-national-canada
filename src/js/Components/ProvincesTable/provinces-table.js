import helper from '../../helper-functions'
import provLookup from '../../../data/prov-codes.json';
import css from './provinces-table.css';


// VARS
let tableRows = '';
const responsiveBreakpoint = 500;
const values = {
	active: [],
	deaths: [],
	per_mil: [],
	recovered: []
};


const init = async (data, el) => {
	// add thead
	let tableString = prepTable();

	// we'll need these later for getting the m
	data.forEach(d => cacheValues(d));

	// descending sort each value array
	for (let [key, value] of Object.entries(values)) {
		value.sort((a,b) => b - a);
	}

	// build the table rows
	data.forEach(d => {
		tableRows += rowTemplate(d);
	});

	// add rows to the table
	tableString += tableRows;

	// close out the html tags
	tableString += closeTable();

	// add table to document
	document.getElementById(el).innerHTML = tableString;
}

function closeTable() {
	return `
		</tbody></table>
	`;
}

function cacheValues(d) {
	values.active.push(d.active_cases);
	values.deaths.push(parseInt(d.numdeaths));
	values.per_mil.push(parseFloat(d.active_cases_per_million));
	values.recovered.push(parseFloat(d.numrecover));
}

function getMaxValue(d) {
	return d.sort((a, b) => a - b);
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
			</t head>
			<tbody>
	`;
}

function rowTemplate(d) {
	// short or full province name based on window width
	const name = window.innerWidth < responsiveBreakpoint ? d.short_name : d.prname; 

	// sets td background colour
	const activePerMilRange = `${Math.round(helper.map(parseInt(d.active_cases_per_million), 0, parseInt(values['per_mil'][0]), 4, 0) + 1)}`;
	const activeRange = `${Math.round(helper.map(parseInt(d.active_cases), 0, values['active'][0], 4, 0) + 1)}`;
	const deathsRange = `${Math.round(helper.map(parseInt(d.numdeaths), 0, values['deaths'][0], 3, 0) + 1)}`;
	const recoveredRange = `${Math.round(helper.map(parseInt(d.numrecover), 0, values['recovered'][0], 4, 0) + 1)}`;

	const newToday = parseInt(d.numtoday) > 0 ? d.numtoday : 0;
	const deathsToday = parseInt(d.deathstoday) > 0 ? d.deathstoday : 0;

	return `
		<tr>
			<td class="province">${name}</td>
			<td class="cases-million weight-${activePerMilRange}">
				<p class="total-num">${helper.numberWithCommas(d.active_cases_per_million)}</p>
			</td>
			<td class="active weight-${activeRange}">
				<p class="total-num">${helper.numberWithCommas(d.active_cases + parseInt(d.numprob))}</p>
				<p>${newToday} new</p>
			</td>
			<td class="deaths weight-${deathsRange}">
				<p class="total-num">${helper.numberWithCommas(d.numdeaths)}</p>
				<p>${deathsToday} new</p>
			</td>
			<td class="recovered weight-${recoveredRange}">
				<p class="total-num">${helper.numberWithCommas(d.numrecover)}</p>
			</td>
		</tr>
	`;
}

export default init;

// <h3>Active COVID-19 cases, deaths and recoveries by province</h3>