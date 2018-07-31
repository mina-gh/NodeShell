let pwd = require('./pwd');
let ls = require('./ls');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

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
    default:
      result = 'default';
  }

  if (result){
    process.stdout.write(result);
    process.stdout.write('\nprompt > ');
  }

});
