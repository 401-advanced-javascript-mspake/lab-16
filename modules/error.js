'use strict';

/**
 * Error Module
 * @module modules/error
 */

const eventEmitter = require('./event-emitter.js');
const eventNames = require('./event-names.js');


function error(err) {
  console.log('error');
  throw new Error;
}

eventEmitter.on(eventNames.error, error);
