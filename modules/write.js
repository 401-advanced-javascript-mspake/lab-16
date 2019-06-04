'use strict';

/**
 * Write Module
 * @module modules/write
 */

const fs = require('fs');
const util = require('util');
const eventEmitter = require('./event-emitter.js');
const eventNames = require('./event-names.js');

const writeFile = util.promisify(fs.writeFile);

/**
 * 
 * @param {Object} input - Object containing the filename and the uppercased text of the file
 */
function write(input) {
  writeFile(input.file, Buffer.from(input.data)).then( () => {
    eventEmitter.emit(eventNames.log, input.file);
  }).catch(err => {
    eventEmitter.emit(eventNames.error, err);      
  });
}

eventEmitter.on(eventNames.write, write);