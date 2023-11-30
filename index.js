const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/:name?', (req, res) => {
	res.status(200).json({
		hello: req.params.name || 'world',
		random: Math.random(),
	});
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`Listening to port ${PORT}`);
});

