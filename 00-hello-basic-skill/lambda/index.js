var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {

  'LaunchRequest': function () {
    this.emit(':ask', 'Welcome to the blood test results skill. Try saying hi or hello', 'Try saying hi or hello');
  },
  'Hello': function () {
    this.emit(':tell', 'Hello there! Thanks for using this skill. Good bye!');
  },
  'AMAZON.FallbackIntent' : function () {
    this.emitWithState('AMAZON.HelpIntent');
  },
    'AMAZON.HelpIntent' : function () {
    this.emit(':ask', 'Help intent. Try saying hi or hello',  'Try saying hi or hello');
  }
};
