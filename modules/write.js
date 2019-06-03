'use strict';

const fs = require('fs');
const util = require('util');
const eventEmitter = require('./event-emitter.js');
const eventNames = require('./event-names.js');

const writeFile = util.promisify(fs.writeFile);

function write(input) {
  writeFile(input.file, Buffer.from(input.data)).then( () => {
    eventEmitter.emit(eventNames.log, input.file);
  })
    .catch(err => {throw err;});
}

eventEmitter.on(eventNames.write, write);