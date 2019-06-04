'use strict';

/**
 * Event Emitter Module
 * @module modules/event-emitter
 * @exports eventEmitter (an EventEmitter instance)
 */

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

module.exports = eventEmitter;