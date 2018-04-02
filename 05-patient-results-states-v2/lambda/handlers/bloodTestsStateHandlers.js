var Alexa = require('alexa-sdk');

// Data
var constants = require('../constants/constants');
var displayBloodResults = require('../data/displayBloodResults');

var bloodTestsStateHandlers = Alexa.CreateStateHandler(constants.states.BLOOD, {

   'BloodReportType': function () {

    var bloodReportType = this.event.request.intent.slots.BloodType.value;
    
    var patientBloodWork = JSON.parse(this.attributes['bloodwork']);

    var arterialBloodGas =["arterial blood gas", "blood gas", "gas"];
    var electrolytes = ["electrolytes", "lights"];
    var hematology  = ["hematology", "hema"];
    
    var bloodTestType = 0;
    
    if (arterialBloodGas.indexOf(bloodReportType) > -1) {
      bloodTestType = constants.ARTERIAL_BLOOD_GAS;
    }
    else if (electrolytes.indexOf(bloodReportType) > -1) {
      bloodTestType = constants.ELECTROLYTES;
    }
    else if (hematology.indexOf(bloodReportType) > -1) {
      bloodTestType = constants.HEMATOLOGY;
    }
    else {
      this.emit(":ask", 'I\'m sorry, but I do not recognize that blood test. You can say blood gas, hematology or lights.')
    }


    // State Automatically Saved with :tell
    var patientNumber = this.attributes['arrayLocation'];  // This variable name should be changed. 
    var cardTitle = `${constants.CARD_TITLES[bloodTestType]} for ${patientBloodWork[patientNumber].name} on ${patientBloodWork[patientNumber].date}`;
    var cardContent = `${displayBloodResults(patientNumber, bloodTestType, patientBloodWork, 'card')}`;
    var imageObj = {
      smallImageUrl: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Blood_drop_plain.svg/2000px-Blood_drop_plain.svg.png`,
      largeImageUrl: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Blood_drop_plain.svg/2000px-Blood_drop_plain.svg.png`,
    };

    this.emit(':askWithCard', `${displayBloodResults(patientNumber, bloodTestType, patientBloodWork, 'voice')}`, 'Would you like another test result for this patient?', cardTitle, cardContent, imageObj);
  },

  'AMAZON.YesIntent': function () {
    this.handler.state = constants.states.PATIENT;
    this.emit(':ask', 'Would you like a blood test or a diagnostic report?');
  },

  'AMAZON.NoIntent': function () {

     this.emit(':tell', `Thank you for using this skill. Goodbye.`);

  },
  'AMAZON.StopIntent': function () {
    // State Automatically Saved with :tell
    this.emit(':tell', `Goodbye.`);
  },
  'AMAZON.CancelIntent': function () {
    // State Automatically Saved with :tell
    this.emit(':tell', `Goodbye.`);
  },
  'SessionEndedRequest': function () {
    // Force State Save When User Times Out
    this.emit(':saveState', true);
  },
  'AMAZON.HelpIntent' : function () {
    this.emit(':ask', `Welcome to the lab results skill. Use this skill to obtain a patient\'s blood work or diagnostic reports.`,  `First, tell me the patient number.`);
  },
  'Unhandled' : function () {
    this.emitWithState('AMAZON.HelpIntent');
  }

});

module.exports = bloodTestsStateHandlers;

