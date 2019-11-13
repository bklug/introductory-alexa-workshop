rm lambda.zip
cd lambda
npm install
zip -r ../lambda.zip *
cd ..
aws lambda update-function-code --function-name alexa-blood-test-results --zip-file fileb://lambda.zip 
