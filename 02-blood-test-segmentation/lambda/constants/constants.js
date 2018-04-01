var constants = Object.freeze({

  // App-ID. TODO: Set Your App ID
  appId : '',

  //  DynamoDB Table Name
  dynamoDBTableName : '',

  ARTERIAL_BLOOD_GAS : 0,
  HEMATOLOGY : 1,
  ELECTROLYTES : 2,

  CARD_TITLES : ["Arterial blood gas", "Hematology", "Electrolytes" ]

});

module.exports = constants;
