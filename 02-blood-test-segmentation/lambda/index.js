var Alexa = require('alexa-sdk');

// Data
var patientBloodWork = require('./data/bloodWork');
var displayBloodResults = require('./data/displayBloodResults');
var constants = require('./constants/constants');

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
    var arrayLocation = '';

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

  'ReportType': function () {
    console.log("ReportType: " + this.event.request.intent.slots.Type.value);

    var reportType = this.event.request.intent.slots.Type.value;
    var bloodReports = ["blood report", "blood", "blood tests", "blood results"];
    var diagnosticReports = ["diagnostics","diagnostic", "diagnostic tests", "diagnostic results"];
    
    if (bloodReports.indexOf(reportType) > -1) {
        this.emit(":ask", "What type of blood report would you like? You can say blood gas, hematology or lights.", 'You can say blood gas, hematology or lights.');
    }
    else if (diagnosticReports.indexOf(reportType) > -1) {
   
      this.emit(":ask", 'We\'re sorry, but diagnostic reports are not avaible at this time. Instead, what type of blood report would you like? You can say blood gas, hematology or lights.', 'You can say blood gas, hematology or lights.')
    
    }

    else {
      this.emit(":ask", 'Oops. I didn\'t hear blood or diagnositics. So, I\'m taking your to blood reports. what type of blood report would you like? You can say blood gas, hematology or lights.');
    }

  },
  
  'BloodReportType': function () {

    var bloodReportType = this.event.request.intent.slots.BloodType.value;
    
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
    var cardContent = `${displayBloodResults(patientNumber, bloodTestType, 'card')}`;
    var imageObj = {
      smallImageUrl: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Blood_drop_plain.svg/2000px-Blood_drop_plain.svg.png`,
      largeImageUrl: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Blood_drop_plain.svg/2000px-Blood_drop_plain.svg.png`,
    };
   
    this.emit(':askWithCard', `${displayBloodResults(patientNumber, bloodTestType, 'voice')}`, 'Would you like another test result for this patient?', cardTitle, cardContent, imageObj);
  },

  'AMAZON.YesIntent': function () {
    this.emit(':ask', 'Would you like a blood test or a diagnostic report?');
  },

  'AMAZON.NoIntent': function () {
      this.emit(':ask', `OK. Please speak another patient number`,  `Please speak another patient number.`);
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
    this.emit(':ask', `Welcome to the lab results skill. Use this skill to obtain a patient\'s blood work or diagnostic reports.`,  `First, tell me the patient number?`);
  },
  'Unhandled' : function () {
    this.emitWithState('AMAZON.HelpIntent');
  }

};
