var patientBloodWork = require('data/bloodWork');
var bloodWorkRanges = require('data/bloodWorkRanges');
var arterialBloodGas = 0;

module.exports = function displayBloodResults(patientNumber,type) {
  var outputSpeech = '';

  if (type==='voice') {
      outputSpeech = `${bloodWorkRanges[arterialBloodGas].speak} <break time="1.0s"/> 
                      ${bloodWorkRanges[arterialBloodGas].ph.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].arterialBloodGas.ph} <break time="0.5s"/>
                      ${bloodWorkRanges[arterialBloodGas].CO2.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].arterialBloodGas.CO2} <break time="0.5s"/>
                      ${bloodWorkRanges[arterialBloodGas].O2.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].arterialBloodGas.O2} <break time="0.5s"/>
                      ${bloodWorkRanges[arterialBloodGas].HCO3.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].arterialBloodGas.HCO3} <break time="0.5s"/>
                      ${bloodWorkRanges[arterialBloodGas].Sat.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].arterialBloodGas.Sat} <break time="0.5s"/>
                      ${bloodWorkRanges[arterialBloodGas].ScVO2.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].arterialBloodGas.ScVO2} <break time="0.5s"/>
                      ${bloodWorkRanges[arterialBloodGas].Lactate.speak} <break time="0.5s"/>  ${patientBloodWork[patientNumber].arterialBloodGas.Lactate} <break time="0.5s"/>

                    `;
  }
  else {
     outputSpeech = `${bloodWorkRanges[arterialBloodGas].ph.display} \u{00A0} \u{00A0} ${patientBloodWork[patientNumber].arterialBloodGas.ph} \n
                    ${bloodWorkRanges[arterialBloodGas].CO2.display} \u{00A0} \u{00A0}  ${patientBloodWork[patientNumber].arterialBloodGas.CO2} \n
                    ${bloodWorkRanges[arterialBloodGas].O2.display} \u{00A0} \u{00A0}  ${patientBloodWork[patientNumber].arterialBloodGas.O2} \n
                    ${bloodWorkRanges[arterialBloodGas].HCO3.display} \u{00A0} \u{00A0}  ${patientBloodWork[patientNumber].arterialBloodGas.HCO3} \n
                    ${bloodWorkRanges[arterialBloodGas].Sat.display}  \u{00A0} \u{00A0} ${patientBloodWork[patientNumber].arterialBloodGas.Sat} \n
                    ${bloodWorkRanges[arterialBloodGas].ScVO2.display}  \u{00A0} \u{00A0} ${patientBloodWork[patientNumber].arterialBloodGas.ScVO2} \n
                    ${bloodWorkRanges[arterialBloodGas].Lactate.display} \u{00A0} \u{00A0}  ${patientBloodWork[patientNumber].arterialBloodGas.Lactate}
                    `;
    
  }

  return outputSpeech;

};