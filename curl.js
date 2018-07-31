const request = require('request');

module.exports = function curl(url, done){
  request(url, (err, res, body) => {
    if (err){
      done(err.stack);
    } else {
      done(body);
    }
  });
  //console.log(request.get(url));
};
