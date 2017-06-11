var http = require('http');
var concatStream = require('concat-stream');
var urls = process.argv.slice(2);
var resultUrls = [];
var counter = 0;
urls.forEach(function(url, i)
{
  http.get(url, function (response) {
    response.setEncoding('utf8');
    response.pipe(concatStream(function (data){
      resultUrls[i] = data;
      counter++;
      if(counter == urls.length)
      {
        resultUrls.forEach(function (result)
        {
          console.log(result);
        });
      }
    }));
  });
});
