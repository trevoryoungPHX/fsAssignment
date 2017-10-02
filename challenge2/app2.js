var fs = require('fs');


  fs.readFile('/Users/trevoryoung/Documents/Galvanize - Code/nodeAssignment/challenge2/info.txt', 'utf8', function(err, data) { // takes 3 args. 1st - file for us to read, can be JSON, TXT, HTML. 2nd - where the contents of the file are going to be. Then a function that takes in two things (An error, and data inside the file)
    if (err) { // if there is an error, throw the error.
      throw err;
    }

    let names = ["Trevor", "Scott"]
    fs.writeFile("/Users/trevoryoung/Documents/Galvanize - Code/nodeAssignment/challenge2/info.txt", data+names, function(err) {
      for(let i=0; i=names.length; i++);
      if (err) {
        throw err;
      }
      console.log("ayo!");
    })
  });
