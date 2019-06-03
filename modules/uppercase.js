'use strict';

const eventEmitter = require('./event-emitter.js');
const eventNames = require('./event-names.js');

function uppercase(input) {
  input.data.toString().toUpperCase();
  eventEmitter.emit(eventNames.write, input);
}

eventEmitter.on(eventNames.uppercase, uppercase);