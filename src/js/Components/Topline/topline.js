import './topline.css';

// vars
const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];

const init = async (data, el) => {
	console.log('topline!')

	console.log(data[0], el)

	// build the template
	const template = toplineTemplate(data[0]);
	// append to element.
	document.getElementById(el).innerHTML = template;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function toplineTemplate(d) {
	// const date = new Date(d.js_date);
	const date = d.date.split('-');
	const last_update = `${months[parseInt(date[1]) - 1]} ${parseInt(date[0])}, ${date[2]}`

	return `
		<div id="container">
			<h1>COVID-19 in Canada</h1>
			<div class="row">
				<div class="section active">
					<p class="metric">Active</p>
					<p class="big-num">${numberWithCommas(parseInt(d.numconf) - parseInt(d.numdeaths) - parseInt(d.numrecover))}</p>
				</div>
				<div class="section deaths">
					<p class="metric">Deaths</p>
					<p class="big-num">${numberWithCommas(d.numdeaths)}</p>
				</div>
				<div class="section recovered">
					<p class="metric">Recovered</p>
					<p class="big-num">${numberWithCommas(d.numrecover)}</p>
				</div>
			</div>
			<p class="last-update">Last updated: ${last_update}</p>
		</div>
	`;
}


export default init;