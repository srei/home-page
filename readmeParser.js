// Seedux README.md parser

const fetch = require('node-fetch');

fetch('https://raw.githubusercontent.com/reduxify/seedux/master/README.md')
    .then(response => response.text())
    .then(text => {
      let splitString = text.split('# Features');

      splitString = splitString[1].split('# Instructions');
      const featuresContent = splitString[0];
      // console.log('FEATURES ---', featuresContent);
      splitString = splitString[1].split('## Getting Started:');
      const installContent = splitString[0];
      // console.log('INSTALL ---', installContent);
      const gettingStartedContent = splitString[1].split('## Complete Example Integration')[0];
      // console.log('GETTING STARTED ---', gettingStartedContent);
      const readme = [
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
    .catch(err => console.log(err));
