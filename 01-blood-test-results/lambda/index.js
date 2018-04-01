var Alexa = require('alexa-sdk');

// Data
var patientBloodWork = require('./data/bloodWork');
var displayBloodResults = require('./data/displayBloodResults');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {

  'LaunchRequest': function () {
    this.emit(':ask', 'Welcome to the lab results skill. Use this skill to obtain a patient\'s blood work or diagnostic reports. First, tell me the patient number.', 'First, tell me the patient number?');
  },

  'PatientNumber': function() {
    var patientNumber = this.event.request.intent.slots.Number.value;
    
    // Check for Patient
    var patientMatch = '';
    var patientName = '';
    var resultsDate = '';
    var arrayLocation ='';

   for (var i = 0; i < patientBloodWork.length; i++) {
      if ( patientBloodWork[i].number === patientNumber ) {
        patientMatch = patientBloodWork[i].number;
        patientName = patientBloodWork[i].name;
        resultsDate = patientBloodWork[i].date;
        arrayLocation = i;
      }
    }

    // Save the Session Attributes
    if (patientMatch !== '') {
      this.attributes['patientNumber'] = patientNumber;
      this.attributes['arrayLocation'] = arrayLocation;
      this.emit(':ask', `Thank you. I have found the results for patient number ${patientNumber}, ${patientName} from ${resultsDate}. Is this correct?`, 'Is this correct?');
    } else {
      this.emit(':ask', `Sorry, patient number ${patientNumber} is not on file. Please speak another patient number.`, 'Please speak another patient number.');
    }
  },

  'AMAZON.YesIntent': function () {
    // State Automatically Saved with :tell
    var patientNumber = this.attributes['arrayLocation'];  // This is the patient number
    var cardTitle = `Arterial blood gas for ${patientBloodWork[patientNumber].name} on ${patientBloodWork[patientNumber].date}`;
    var cardContent = `${displayBloodResults(patientNumber,'card')}`;
    var imageObj = {
      smallImageUrl: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Blood_drop_plain.svg/2000px-Blood_drop_plain.svg.png`,
      largeImageUrl: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Blood_drop_plain.svg/2000px-Blood_drop_plain.svg.png`,
    };

    this.emit(':tellWithCard', `${displayBloodResults(patientNumber,'voice')}`, cardTitle, cardContent, imageObj);

    //this.emit(':tell', `${displayBloodResults(patientNumber)}`);
  },

  'AMAZON.NoIntent': function () {
    // State Automatically Saved with :tell
    this.emit(':ask', `Sorry, I didn't get the correct patient. Tell me a different patient number.`, `Tell me a different patient number.`);
  },
  
  'AMAZON.StopIntent': function () {
    // State Automatically Saved with :tell
    this.emit(':tell', `Goodbye.`);
  },
  'AMAZON.CancelIntent': function () {
    // State Automatically Saved with :tell
    this.emit(':tell', `Goodbye.`);
  },
  
  'AMAZON.HelpIntent' : function () {
    this.emit(':ask', `Welcome to the lab results skill. Use this skill to obtain a patient\'s blood work or diagnostic reports.`,  `First, tell me the patient number?`);
  },
  'SessionEndedRequest': function () {
    // Force State Save When User Times Out
    this.emit(':saveState', true);
  },

  'Unhandled' : function () {
    this.emitWithState('AMAZON.HelpIntent');
  }

};
