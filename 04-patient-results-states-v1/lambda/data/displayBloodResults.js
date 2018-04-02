var constants = require('constants/constants');
var bloodWorkRanges = require('data/bloodWorkRanges');

module.exports = function displayBloodResults(patientNumber, bloodTestType, patientBloodWork, type) {
  var outputSpeech = '';

  switch (bloodTestType) {
    case constants.ARTERIAL_BLOOD_GAS: 
      if (type==='voice') {
          outputSpeech = `${bloodWorkRanges[constants.ARTERIAL_BLOOD_GAS].speak} <break time="1.0s"/> 
                          ${bloodWorkRanges[constants.ARTERIAL_BLOOD_GAS].ph.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].arterialBloodGas.ph} <break time="0.5s"/>
                          ${bloodWorkRanges[constants.ARTERIAL_BLOOD_GAS].CO2.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].arterialBloodGas.CO2} <break time="0.5s"/>
                          ${bloodWorkRanges[constants.ARTERIAL_BLOOD_GAS].O2.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].arterialBloodGas.O2} <break time="0.5s"/>
                          ${bloodWorkRanges[constants.ARTERIAL_BLOOD_GAS].HCO3.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].arterialBloodGas.HCO3} <break time="0.5s"/>
                          ${bloodWorkRanges[constants.ARTERIAL_BLOOD_GAS].Sat.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].arterialBloodGas.Sat} <break time="0.5s"/>
                          ${bloodWorkRanges[constants.ARTERIAL_BLOOD_GAS].ScVO2.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].arterialBloodGas.ScVO2} <break time="0.5s"/>
                          ${bloodWorkRanges[constants.ARTERIAL_BLOOD_GAS].Lactate.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].arterialBloodGas.Lactate} <break time="0.5s"/>
                        `;
      }
      else {
        outputSpeech = `${bloodWorkRanges[constants.ARTERIAL_BLOOD_GAS].ph.display} \u{00A0} \u{00A0} ${patientBloodWork[patientNumber].arterialBloodGas.ph} \n
                        ${bloodWorkRanges[constants.ARTERIAL_BLOOD_GAS].CO2.display} \u{00A0} \u{00A0}  ${patientBloodWork[patientNumber].arterialBloodGas.CO2} \n
                        ${bloodWorkRanges[constants.ARTERIAL_BLOOD_GAS].O2.display} \u{00A0} \u{00A0}  ${patientBloodWork[patientNumber].arterialBloodGas.O2} \n
                        ${bloodWorkRanges[constants.ARTERIAL_BLOOD_GAS].HCO3.display} \u{00A0} \u{00A0}  ${patientBloodWork[patientNumber].arterialBloodGas.HCO3} \n
                        ${bloodWorkRanges[constants.ARTERIAL_BLOOD_GAS].Sat.display}  \u{00A0} \u{00A0} ${patientBloodWork[patientNumber].arterialBloodGas.Sat} \n
                        ${bloodWorkRanges[constants.ARTERIAL_BLOOD_GAS].ScVO2.display}  \u{00A0} \u{00A0} ${patientBloodWork[patientNumber].arterialBloodGas.ScVO2} \n
                        ${bloodWorkRanges[constants.ARTERIAL_BLOOD_GAS].Lactate.display} \u{00A0} \u{00A0}  ${patientBloodWork[patientNumber].arterialBloodGas.Lactate}
                        `;
        
      }
      break;
    case constants.HEMATOLOGY: 
      if (type==='voice') {
          outputSpeech = `${bloodWorkRanges[constants.HEMATOLOGY].speak} <break time="1.0s"/> 
                          ${bloodWorkRanges[constants.HEMATOLOGY].WBC.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].hematology.WBC} <break time="0.5s"/>
                          ${bloodWorkRanges[constants.HEMATOLOGY].HGB.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].hematology.HGB} <break time="0.5s"/>
                          ${bloodWorkRanges[constants.HEMATOLOGY].PLTS.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].hematology.PLTS} <break time="0.5s"/>
                          ${bloodWorkRanges[constants.HEMATOLOGY].HCT.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].hematology.HCT} <break time="0.5s"/>
                         `;
      }
      else {
        outputSpeech = `${bloodWorkRanges[constants.HEMATOLOGY].WBC.display} \u{00A0} \u{00A0} ${patientBloodWork[patientNumber].hematology.WBC} \n
                        ${bloodWorkRanges[constants.HEMATOLOGY].HGB.display} \u{00A0} \u{00A0}  ${patientBloodWork[patientNumber].hematology.HGB} \n
                        ${bloodWorkRanges[constants.HEMATOLOGY].PLTS.display} \u{00A0} \u{00A0}  ${patientBloodWork[patientNumber].hematology.PLTS} \n
                        ${bloodWorkRanges[constants.HEMATOLOGY].HCT.display} \u{00A0} \u{00A0}  ${patientBloodWork[patientNumber].hematology.HCT}
                        `;
        
      }
      break;
    case constants.ELECTROLYTES:
      if (type==='voice') {
          outputSpeech = `${bloodWorkRanges[constants.ELECTROLYTES].speak} <break time="1.0s"/> 
                          ${bloodWorkRanges[constants.ELECTROLYTES].Na.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].electrolytes.Na} <break time="0.5s"/>
                          ${bloodWorkRanges[constants.ELECTROLYTES].K.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].electrolytes.K} <break time="0.5s"/>
                          ${bloodWorkRanges[constants.ELECTROLYTES].Cl.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].electrolytes.Cl} <break time="0.5s"/>
                          ${bloodWorkRanges[constants.ELECTROLYTES].Glucose.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].electrolytes.Glucose} <break time="0.5s"/>
                          ${bloodWorkRanges[constants.ELECTROLYTES].BUN.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].electrolytes.BUN} <break time="0.5s"/>
                          ${bloodWorkRanges[constants.ELECTROLYTES].CR.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].electrolytes.CR} <break time="0.5s"/>
                          ${bloodWorkRanges[constants.ELECTROLYTES].HCO3.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].electrolytes.HCO3} <break time="0.5s"/>
                          ${bloodWorkRanges[constants.ELECTROLYTES].ABG.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].electrolytes.ABG} <break time="0.5s"/>
                          ${bloodWorkRanges[constants.ELECTROLYTES].PaCO2.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].electrolytes.PaCO2} <break time="0.5s"/>
                          ${bloodWorkRanges[constants.ELECTROLYTES].PaO2.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].electrolytes.PaO2} <break time="0.5s"/>
                          ${bloodWorkRanges[constants.ELECTROLYTES].Sa02.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].electrolytes.Sa02} <break time="0.5s"/>
                        `;
      }
      else {
        outputSpeech = `${bloodWorkRanges[constants.ELECTROLYTES].Na.display} \u{00A0} \u{00A0} ${patientBloodWork[patientNumber].electrolytes.Na} \n
                        ${bloodWorkRanges[constants.ELECTROLYTES].K.display} \u{00A0} \u{00A0}  ${patientBloodWork[patientNumber].electrolytes.K} \n
                        ${bloodWorkRanges[constants.ELECTROLYTES].Cl.display} \u{00A0} \u{00A0}  ${patientBloodWork[patientNumber].electrolytes.Cl} \n
                        ${bloodWorkRanges[constants.ELECTROLYTES].Glucose.display} \u{00A0} \u{00A0}  ${patientBloodWork[patientNumber].electrolytes.Glucose} \n
                        ${bloodWorkRanges[constants.ELECTROLYTES].BUN.display}  \u{00A0} \u{00A0} ${patientBloodWork[patientNumber].electrolytes.BUN} \n
                        ${bloodWorkRanges[constants.ELECTROLYTES].CR.display}  \u{00A0} \u{00A0} ${patientBloodWork[patientNumber].electrolytes.CR} \n
                        ${bloodWorkRanges[constants.ELECTROLYTES].HCO3.display} \u{00A0} \u{00A0}  ${patientBloodWork[patientNumber].electrolytes.HCO3} \n
                        ${bloodWorkRanges[constants.ELECTROLYTES].ABG.display} \u{00A0} \u{00A0}  ${patientBloodWork[patientNumber].electrolytes.ABG} \n
                        ${bloodWorkRanges[constants.ELECTROLYTES].PaCO2.display}  \u{00A0} \u{00A0} ${patientBloodWork[patientNumber].electrolytes.PaCO2} \n
                        ${bloodWorkRanges[constants.ELECTROLYTES].PaO2.display}  \u{00A0} \u{00A0} ${patientBloodWork[patientNumber].electrolytes.PaO2} \n
                        ${bloodWorkRanges[constants.ELECTROLYTES].Sa02.display} \u{00A0} \u{00A0}  ${patientBloodWork[patientNumber].electrolytes.Sa02}
                        `;
        
      }
      break;
    default:
  }

  return outputSpeech;

};