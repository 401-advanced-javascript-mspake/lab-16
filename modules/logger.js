'use strict';
const eventEmitter = require('./event-emitter.js');
const eventNames = require('./event-names.js');

function log(file) {
  console.log(`${file} saved`);
}

eventEmitter.on(eventNames.log, log);