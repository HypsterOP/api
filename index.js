const express = require('express');
const app = express();

app.get('/reverse/:query', (req, res) => {
	const query = req.params.query;
	// ['h'] {}dfgdfg
	const split = query.split('');

	const reversed = split.reverse();

	const response = reversed.join();
	res.status(200).send({ response });
});

app.get('/mock/:query', (req, res) => {
	const query = req.params.query;
	const response = query
		.split('')
		.map((character, index) =>
			index % 2 === 0 ? character.toLowerCase() : character.toUpperCase()
		)
		.join('');
        res.status(200).send({ response })
});

app.use((req, res) => {
	res.status(404).send('404 Not FOUND');
});

app.listen(3000, () => console.log('http://localhost:3000'));
