var fs = require('fs');
var mymodule = require('./fileModule.js');
var dirPath = process.argv[2], extensions = process.argv[3];

mymodule(dirPath, extensions, function(err, list){
  if(err){
    throw err;
  }
  list.forEach(function(file)
  {
    console.log(file);
  });
});
