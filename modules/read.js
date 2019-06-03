'use strict';

const fs = require('fs');
const util = require('util');
const eventEmitter = require('./event-emitter.js');
const eventNames = require('./event-names.js');

const readFile = util.promisify(fs.readFile);

function read(file) {
  readFile(file).then( data => {
    eventEmitter.emit(eventNames.uppercase, {file, data});
  })
    .catch(err => {throw err;});
}

eventEmitter.on(eventNames.read, read);