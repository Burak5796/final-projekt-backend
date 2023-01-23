import express from "express";



const app = express();
const PORT = 4120;



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c91afbac5msh4d1f8b9334e7aeap153f91jsn21301dfe0c00',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

fetch('https://api-football-v1.p.rapidapi.com/v3/timezone', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


app.listen(PORT,() => {
    console.log('Server runs');
})