
/*
** Place this function at the bottom of the index.js file, outside the handler fucntion
** To call the function:
**    getQuote(quote => {
**      this.emit(':ask', `${quote}. Would you like to hear another quote? You can say one more or another quote.`, 'Would you to hear another quote? You can say one more or another quote');
**    });
*/

function getQuote(callback) {
  var http = require('http');
  var url = "http://api.forismatic.com/api/1.0/json?method=getQuote&lang=en&format=json";
  var req = http.get(url, function(res) {
    var body = "";

    res.on('data', function(chunk) {
      body += chunk;
    });

    res.on('end', function() {
      body = body.replace(/\\/g,'');
      var quote = JSON.parse(body);
      callback(quote.quoteText);
    });

  });

  req.on('error', function(err) {
    callback('',err);
  });
};
