// CSS
import normalize from './css/normalize.css';
import colours from './css/colors.css';
import fonts from './css/fonts.css';
import css from './css/main.css';

// JS
import axios from 'axios';
import topline from './js/Components/Topline/topline';
import provincesTable from './js/Components/ProvincesTable/provinces-table';
import config from './data/config.json';

// VARS
const toplineEl = 'topline'; // this needs to be an element ID
const dataUrl = 'https://storage.googleapis.com/vs-postmedia-data/covid-healthcanada-data.json';

const init = async () => {
	// fetch & prep data
	const resp = await axios.get(dataUrl);

	// canada-wide numbers
	topline(resp.data.filter(d => d.prname === 'Canada'), toplineEl);
	// provincesTable(data, config);
};

init();