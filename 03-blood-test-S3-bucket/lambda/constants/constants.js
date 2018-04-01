var constants = Object.freeze({

  // App-ID. TODO: Set Your App ID
  appId : 'amzn1.ask.skill.5e24864d-d851-4a5c-b7ad-003c9c0f36c3',

  //  DynamoDB Table Name
  dynamoDBTableName : '',

  ARTERIAL_BLOOD_GAS : 0,
  HEMATOLOGY : 1,
  ELECTROLYTES : 2,

  CARD_TITLES : ["Arterial blood gas", "Hematology", "Electrolytes" ],

  // S3 bucket parameters
  BUCKET : 'bcnet-blood-results',
  KEY : 'blood-results.json'

});

module.exports = constants;
