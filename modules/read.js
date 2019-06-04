'use strict';

/**
 * Read File Module
 * @module modules/read
 */

const fs = require('fs');
const util = require('util');
const eventEmitter = require('./event-emitter.js');
const eventNames = require('./event-names.js');

const readFile = util.promisify(fs.readFile);

/**
 * 
 * @param {*} file - File passed in from app.js
 */
function read(file) {
  readFile(file).then( data => {
    eventEmitter.emit(eventNames.uppercase, {file, data});
  }).catch(err => {
    eventEmitter.emit(eventNames.error, err);
  });
}

eventEmitter.on(eventNames.read, read);