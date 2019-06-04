'use strict';

/**
 * App
 * @file 
 */

const eventEmitter = require('./modules/event-emitter.js');
const eventNames = require('./modules/event-names.js');
require('./modules/read.js');
require('./modules/uppercase.js');
require('./modules/write.js');
require('./modules/logger.js');
require('./modules/error.js');

const alterFile = (file) => {
  eventEmitter.emit(eventNames.read,file);
};

let file = process.argv.slice(2).shift();
alterFile(file);
