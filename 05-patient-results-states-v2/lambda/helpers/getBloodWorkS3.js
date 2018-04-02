var constants = require('constants/constants');


module.exports = function getBloodWorkS3(callback) {
    var AWS = require('aws-sdk');
    var s3 = new AWS.S3();

    var params = {
        Bucket: constants.BUCKET,
        Key: constants.KEY
      }
      
    s3.getObject(params, function(err, data) {
        if (err) { 
            console.log(err, err.stack); 
        }
        else {

            var bloodWork = data.Body.toString();
            console.log("getBloodWordS3 results: "+bloodWork);
            
            callback(bloodWork);
        }
    });

};
