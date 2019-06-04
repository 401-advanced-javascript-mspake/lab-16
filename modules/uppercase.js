'use strict';

/**
 * Uppercase Module
 * @module modules/uppercase
 */

const eventEmitter = require('./event-emitter.js');
const eventNames = require('./event-names.js');

/**
 * 
 * @param {Object} input - Object containing the filename and the buffer
 */
function uppercase(input) {
  input.data.toString().toUpperCase();
  eventEmitter.emit(eventNames.write, input);
}

eventEmitter.on(eventNames.uppercase, uppercase);