var fs = require('fs');
var buffer = fs.readFile(process.argv[2], 'utf8', function (err, data)
{
  if (err) throw err;
  var newContent = data.split('\n').length-1;
  console.log(newContent)
}); //Gets data from file in a buffer formatted
