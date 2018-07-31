const fs = require('fs');

module.exports = function ls(done){
  fs.readdir('./', 'utf8', (err, files) => {
    if (err){
      done(err.stack);
    } else {
      done(files.join('\n'));
    }
  });
};
