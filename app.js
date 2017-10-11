console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('note created');
    console.log('--');
    console.log('Title: ' + note.title);
    console.log('Body: ' + note.body);
  }
  else {
    console.log('note title taken');
  }
} else if (command === 'list') {
  notes.getAll();
}
else if (command === 'read') {
  notes.getNote(argv.title);
}
else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
}
else {
  console.log('Command not recognized');
}
// var filteredArray = _.uniq(['mike']);
// console.log(filteredArray);
// console.log(_.isString(true));
// console.log(_.isString('meatball'));

// var res = notes.add(1, 2);
// console.log(res);
// var res = notes.addNote();
// console.log(res);

// var user = os.userInfo();
//
// fs.appendFile('greetings.txt', 'Hello ${user.username}! You are ${notes.age}.', function(err){
//   if (err) {
//     console.log('Unable to write to file');
//   }
// });
