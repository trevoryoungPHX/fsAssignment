var fs = require('fs');

fs.readFile('./info.txt', 'utf8', function(err, data) { // takes 3 args. 1st - file for us to read, can be JSON, TXT, HTML. 2nd - where the contents of the file are going to be. Then a function that takes in two things (An error, and data inside the file)
  if (err) { // if there is an error, throw the error.
    throw err;
  }
  console.log(data);
});
