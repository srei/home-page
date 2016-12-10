let express = require('express'),
		app = express(),
		bodyParser = require('body-parser');

//get marked, run marked on the strings in readme array//w/ what marked returns
let fetch = require('node-fetch');
fetch.promise = require('bluebird');

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'jade');

app.set('views', __dirname + "/views");

app.get('/', (req, res, next) => {
fetch('https://raw.githubusercontent.com/reduxify/seedux/master/README.md')
    .then(response => response.text())
    .then(text => {
      let splitString = text.split('# Features');
      splitString = splitString[1].split('# Instructions');
      const featuresContent = splitString[0];
      splitString = splitString[1].split('## Getting Started:');
      const installContent = splitString[0];
      const gettingStartedContent = splitString[1].split('## Complete Example Integration')[0];
      return readme = [
        {
          sectionTitle: 'Features',
          sectionContent: featuresContent,
        },
        {
          sectionTitle: 'Install',
          sectionContent: installContent,
        },
        {
          sectionTitle: 'Getting Started',
          sectionContent: gettingStartedContent,
        },
      ];
    })
    .then(readme => {
    	console.log({readme});
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
