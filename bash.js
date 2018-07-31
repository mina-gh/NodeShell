const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  let splitted = data.toString().trim().split(/\s+/);
  const cmd = splitted[0];
  let params = splitted.slice(1);

  let result;
  switch (cmd){
    case 'pwd':
      result = pwd();
      break;
    case 'ls':
      result = ls((filenames) => {
        process.stdout.write(filenames);
        process.stdout.write('\nprompt > ');
      });
      break;
    case 'cat':
      cat(params, (filedata) => {
        process.stdout.write(filedata);
        process.stdout.write('\nprompt > ');
      });
      break;
    case 'curl':
      curl(params[0], (body) => {
        process.stdout.write(body);
        process.stdout.write('\nprompt > ');
      });
      break;
    default:
      result = 'default';
  }

  if (result){
    process.stdout.write(result);
    process.stdout.write('\nprompt > ');
  }

});
