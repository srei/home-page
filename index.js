let express = require('express'),
		app = express(),
		bodyParser = require('body-parser');

//get marked, run marked on the strings in readme array//w/ what marked returns
let fetch = require('node-fetch');
fetch.promise = require('bluebird');

let marked = require('marked');

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'jade');

app.set('views', __dirname + "/views");

app.get('/', (req, res, next) => {
fetch('https://raw.githubusercontent.com/reduxify/seedux/master/README.md')
    .then(response => response.text())
    .then(text => {
    	//features
      let entireString = text.split('# Features');

      entireString = entireString[1].split('# How to Install');
      const featuresContent = entireString[0];

      entireString = entireString[1].split('## Getting Started:');

      const installContent = entireString[0];

      const gettingStartedContent = entireString[1].split('## Complete Example Integration')[0];

      return readme = [
        {
          sectionTitle: 'Features',
          sectionContent: marked(featuresContent),
        },
        {
          sectionTitle: 'Install',
          sectionContent: marked(installContent),
        },
        {
          sectionTitle: 'Getting Started',
          sectionContent: marked(gettingStartedContent),
        }
      ];
    })
    .then(readme => {
    	res.render('index', {readme});
    })
    .catch(err => console.log(err));
});

app.get('/duck', (req,res, next) => {
	res.sendFile(__dirname + '/icons/duck.jpg');
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
