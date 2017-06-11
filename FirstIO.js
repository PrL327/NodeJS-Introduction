var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var content = buffer.toString(); //converts buffer data to a string
var newContent = content.split('\n').length-1; //split at every '\n' itteration to get count of its appearances
console.log(newContent);//prints to terminal
