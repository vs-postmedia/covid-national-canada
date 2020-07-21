// CSS
import normalize from './css/normalize.css';
import colours from './css/colors.css';
import fonts from './css/fonts.css';
import css from './css/main.css';

// JS
import axios from 'axios';
import topline from './js/Components/Topline/topline';
import provincesTable from './js/Components/ProvincesTable/provinces-table';
// import config from './data/config.json';

// VARS
const tableEl = 'table'; // this needs to be an element ID
const toplineEl = 'topline'; // this needs to be an element ID
const dataUrl = 'https://vs-postmedia-data.sfo2.digitaloceanspaces.com/covid-active-cases.json';

const init = async () => {
	// fetch & prep data
	const resp = await axios.get(dataUrl);

	// exclude national & repatriated for the table
	const tableData = resp.data.filter(d => d.pruid !== '1' && d.pruid !== '99' && d.pruid !== '12')
	const sortedData = tableData.sort((a,b) => parseInt(b.active_cases_per_million) - parseInt(a.active_cases_per_million))

	// canada-wide numbers
	topline(resp.data.filter(d => d.prname === 'Canada'), toplineEl);
	// table for provinces
	provincesTable(sortedData, tableEl);
};

// let's get started!
init();