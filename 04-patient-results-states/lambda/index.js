var Alexa = require('alexa-sdk');

// Constants
var constants = require('./constants/constants');

// Handlers
var patientIdentificationStateHandlers = require('./handlers/patientIdentificationStateHandlers');
var diagnosticReportsStateHandlers = require('./handlers/diagnosticReportsStateHandlers');
var bloodTestsStateHandlers = require('./handlers/bloodTestsStateHandlers');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);

  alexa.appId = constants.appId;
  alexa.dynamoDBTableName = constants.dynamoDBTableName;

  alexa.registerHandlers(
    patientIdentificationStateHandlers,
    diagnosticReportsStateHandlers,
    bloodTestsStateHandlers
  );

  alexa.execute();
};
