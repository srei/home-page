
let express = require('express'),
		app = express(),
		bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'jade');
app.set('views', __dirname + "/views");

app.get('/', (req, res, next) => {
	res.render('index')
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
