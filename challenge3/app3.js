var fs = require('fs');

fs.rename("/Users/trevoryoung/Documents/Galvanize - Code/nodeAssignment/challenge3/binfo.txt", "/Users/trevoryoung/Documents/Galvanize - Code/nodeAssignment/challenge3/info.txt", function(err) {
  if (err) {
    throw err;
  }
});
