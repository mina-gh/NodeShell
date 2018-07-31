const fs = require('fs');

module.exports = function cat(fileNames, done){
  if (fileNames.length === 0){
    process.stdout.write('\nprompt > ');
  } else {
    fs.readFile(fileNames[0], (err, data) => {
      if (err){
        done(err.stack);
      } else {
        done(data);

        // loop thru all the follwoing file names.
        fileNames = fileNames.slice(1);
        cat(fileNames, done);
      }
    });
  }
}
