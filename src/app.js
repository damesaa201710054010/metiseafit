const bodyParser = require('body-parser');
const dialogflow = require('dialogflow');
const express = require('express');
const uuid = require('uuid');
const cors = require('cors');
var path = require('path');
const app = express();
const ROOT_DIR  = require('./rootDir.js');
const mySqlConnection = require('./database');

// A unique identifier for the given session.
const sessionId = uuid.v4();

// settings
app.set('port', process.env.PORT || 5000);
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded(
    { extended:false }
));

// middlewares 
app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    // Pass to next layer of middleware
    next();
});

// routes
app.use('/api/notes', require('./routes/notes'));
app.use('/api/users', require('./routes/users'));
app.use('/', require('./routes/views.routes'));
app.use('/documentConnection', require('./routes/connection'));

app.use(express.static(ROOT_DIR + '/views/'));

app.post('/send-msg', (req, res) => {
    runSample(req.body.MSG)
      .then( data => {
          res.send({Reply:data});
      });
});
  
/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function runSample(userMessage, projectId = 'metis-es-lfflxf') {
    // Create a new session
    const sessionClient = new dialogflow.SessionsClient({
        keyFilename: path.join(ROOT_DIR + '/config/METIS-ES-a64062639f09.json')
      });
    const sessionPath = sessionClient.sessionPath(projectId, sessionId);
  
    // The text query request.
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          // The query to send to the dialogflow agent
          text: userMessage,
          // The language used by the client (en-US)
          languageCode: 'es',
        },
      },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    verifyCalc(result);
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
      console.log(`  Intent: ${result.intent.displayName}`);
    } else {
      console.log(`  No intent matched.`);
    }
    return result.fulfillmentText;
}

function verifyCalc(response) {
  if (response.fulfillmentText.includes("#calc")) {
    console.log("It Works!");
    assignFunctionToCalc(response);
  } else {
    console.log("ok :/");
  }
}

function assignFunctionToCalc(response) {
  const responseSubstring = response.fulfillmentText.substring(6, response.fulfillmentText.length - 1);
  const querySubstring = response.queryText.substring(12, response.queryText.length);
  console.log('QUeryjasd -> ', querySubstring);
  switch (responseSubstring) {
    case "stuff":
      console.log("It Works! x2");
      mySqlConnection.query('SELECT * FROM `estudiante`', function (error, results, fields) {
        if (error) throw error;
        console.log('The result is: ', results[0]);
        console.log('\n\n-> codigo del estudiante: ', results[0].codigoEstudiante);
      });
      mySqlConnection.end();    
      break;
    case "inscripciones":
      var auxiliary;
      console.log("Inscripciones working");
      mySqlConnection.query('SELECT * FROM `estudiante` WH', function (error, results, fields) {
        if (error) throw error;
        console.log('The result is: ', results[0]);
        console.log('\n\n-> codigo del estudiante: ', results[0].codigoEstudiante);
        auxiliary = results[0].nombre ;

      });
      mySqlConnection.end();   

      response.fulfillmentText = "Eres: " + auxiliary;
      break;
    default:
      console.log('Dem it!');
      break;
  }
}

module.exports = app;
