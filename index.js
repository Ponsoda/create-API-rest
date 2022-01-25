const express= require('express');
const app = express();
const PORT = 8080;


app.use(express.json())

app.listen(
	PORT,
	()=>console.log(`it is alive in port http://localhost:${PORT}`)

)
app.get('/tshirt', (req, res) => {
	res.status(200).send({
		tshirt:'shirt',
		size: 'large'
	})	
});

app.post('/tshirt/:id', (req, res) => {
	
	const {id} = req.params;
	const {logo} = req.body;
	if(!logo) {
		res.status(418).send({message : 'Need a logo'})
	}	

	res.send({
		tshirt: `the tshirt with your ${logo} and ID of ${id}`,
	});
});

