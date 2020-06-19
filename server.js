const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const axios = require('axios');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors())
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.get('/api/hello', (req, res) => {
	res.send({
		express: 'Hello From Express',
	});
});

app.post('/api/places', (req, res) => {
	let type = req.body.type;
	let apiKey = process.env.GOOGLE_PLACES_API_KEY;
	let latitude = req.body.latitude;
	let longitude = req.body.longitude;
	let radius = 1500;
	let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${apiKey}`;
	axios
		.get(url)
		.then((response) => {
			res.send(response.data);
		})
		.catch((error) => console.log(error));
});

app.post('/api/details', (req, res) => {
	let id = req.body.id;
	let apiKey = process.env.GOOGLE_PLACES_API_KEY;
	let url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&key=${apiKey}`;
	console.log(url);
	axios
		.get(url)
		.then((response) => {
			res.send(response.data);
		})
		.catch((error) => console.log(error));
	
})

app.listen(port, () => console.log(`Listening on port ${port}`));
