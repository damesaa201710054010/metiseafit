require('dotenv').config();
const app = require('./app');
require('./database');
const ngrok = require('ngrok');

async function main() {
    app.listen(app.get('port'), app-get('ip'));
    const url = await ngrok.connect(app.get('port'));
    console.log(url);
    /*await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));*/
}

main();
