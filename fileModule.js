var fs = require('fs');
var filepath = require('path');

module.exports = function(dir, exten, rdir)
{
  var filteredlist = [];

  fs.readdir(dir, function (err, list){
    if(err){
      return rdir(err);
    }

    list.forEach(function (file)
  {
    if(filepath.extname(file) == '.'+ exten)
    {
      filteredlist.push(file);
    }
  });
  rdir(null, filteredlist);
});
};
