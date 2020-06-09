import helper from '../../helper-functions';
import './topline.css';

// vars


const init = async (data, el) => {
	// build the template
	const template = toplineTemplate(data[0]);
	// append to element.
	document.getElementById(el).innerHTML = template;
}

function toplineTemplate(d) {
	// const date = new Date(d.js_date);
	const date = d.date.split('-');
	const last_update = `${helper.months[parseInt(date[1]) - 1]} ${parseInt(date[0])}, ${date[2]}`

	return `
		<div id="container">
			<h1>COVID-19 in Canada</h1>
			<div class="row">
				<div class="section active">
					<p class="metric">Active cases</p>
					<p class="big-num">${helper.numberWithCommas(d.active_cases + parseInt(d.numprob))}</p>
				</div>
				<div class="section deaths">
					<p class="metric">Deaths</p>
					<p class="big-num">${helper.numberWithCommas(d.numdeaths)}</p>
				</div>
				<div class="section recovered">
					<p class="metric">Recovered</p>
					<p class="big-num">${helper.numberWithCommas(d.numrecover)}</p>
				</div>
			</div>
			<p class="last-update">Last updated: ${last_update}</p>
		</div>
	`;
}


export default init;