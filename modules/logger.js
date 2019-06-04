'use strict';
/**
 * Logger Module
 * @module modules/logger
 */

const eventEmitter = require('./event-emitter.js');
const eventNames = require('./event-names.js');

/**
 * 
 * @param {*} file - File name
 */
function log(file) {
  console.log(`${file} saved`);
}

eventEmitter.on(eventNames.log, log);