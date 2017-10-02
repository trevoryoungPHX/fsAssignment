var fs = require('fs');

var readFile('./info.text','utf8', function(err, data) {
  if (err) {
    throw err;  }
var result = data.replace(/"-"/g, ' ');
fs.writeFile('./info.txt', result, function() {
  if (err) {
    throw err;  }
};
})
