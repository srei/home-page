var readme = [
  {
    sectionTitle: 'Features',
    sectionContent: `<ul>
    <li>Here are some <strong>Really cool</strong></li>
    <li>Awesome features</li>
    </ul>`,
  },
  {
    sectionTitle: 'Getting Started',
    sectionContent: `<h2>Do Code stuff</h2>
    <code>This is a code block</code>
    <h2>Do Other code stuff</h2>
    <code>This is the other code block</h2>`,
  },
  {
    sectionTitle: 'How to Install',
    sectionContent: `<h2>Do Code stuff</h2>
    <code>This is a code block</code>
    <h2>Do Other code stuff</h2>
    <code>This is the other code block</h2>`,
  },
];

let express = require('express'),
		app = express(),
		bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'jade');

app.set('views', __dirname + "/views");

app.get('/', (req, res, next) => {
	res.render('index', {readme})
});


app.get('/duck', (req,res, next) => {
	res.sendFile(__dirname + '/icons/duck.jpg');
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
