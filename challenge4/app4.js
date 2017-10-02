var fs = require('fs');

fs.mkdir('/Users/trevoryoung/Documents/Galvanize - Code/nodeAssignment/challenge4/copyfolder', function (err) {
  if (err) {
    throw err;
  }
  fs.copyFile("./info.txt", "/Users/trevoryoung/Documents/Galvanize - Code/nodeAssignment/challenge4/copyfolder/info.txt", function (err) {
    if (err) {
      throw err;
});


/////have to do copyFiule func tion within mkdir function so that the folder is created before you add the file into it. 
