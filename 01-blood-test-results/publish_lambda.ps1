del lambda.zip
compress-archive -Path "G:\Alexa Nursing Project\00-hello-basic-skill\lambda\*" -CompressionLevel NoCompression -DestinationPath lambda.zip
aws lambda update-function-code --function-name bcnet-2018 --zip-file fileb://lambda.zip
