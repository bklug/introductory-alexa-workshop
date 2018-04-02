var Alexa = require('alexa-sdk');

// Data
var constants = require('./constants/constants');

var getBloodWorkS3 = require('./helpers/getBloodWorkS3');

var patientIdentificateStateHandlers = Alexa.CreateStateHandler(constants.states.PATIENT, {


  'NewSession': function () {
    //console.log("NewSession");

    getBloodWorkS3(bloodResults => {
      //console.log("received : " + myResult);
      this.attributes['bloodwork'] = bloodResults;
      this.emitWithState('LaunchRequest');
      }
    );

  },

  'LaunchRequest': function () {
    this.attributes['state'] = '';
    this.emit(':ask', 'Welcome to the lab results skill. Use this skill to obtain a patient\'s blood work or diagnostic reports. First, tell me the patient number.', 'First, tell me the patient number?');
  },

  'PatientNumber': function() {
    var patientNumber = this.event.request.intent.slots.Number.value;
    
    var patientBloodWork = JSON.parse(this.attributes['bloodwork']);

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

    //These values match the Slot Values in for ReportTypes
    var bloodReports = ["blood", "blood test"];
    var diagnosticReports = ["diagnostic", "diagnostic report"];
    
    if (bloodReports.indexOf(reportType) > -1) {
      this.attributes['state'] = constants.states.BLOOD;
      this.emit(":ask", "What type of blood test would you like? You can say blood gas, hematology or lights.", 'You can say blood gas, hematology or lights.');
    }
    else if (diagnosticReports.indexOf(reportType) > -1) {
      this.attributes['state'] = constants.states.DIAGNOSTIC;
      this.emit(":ask", "What type of diagnositic report would you like? You can x ray, ultrasound or c t scan.", 'You can x ray, ultrasound or c t scan.');
    }
    else {
      this.emit(":ask", 'Oops. I didn\'t hear blood or diagnostic. What type of report would you like? You can say blood or diagnostic');
    }
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
    this.emit(':ask', `Welcome to the lab results skill. Use this skill to obtain a patient\'s blood work or diagnostic reports.`,  `First, tell me the patient number.`);
  },
  'Unhandled' : function () {
    this.emitWithState('AMAZON.HelpIntent');
  }

});

module.exports = patientIdentificateStateHandlers;



