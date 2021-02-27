var log = require('../core/log');
var moment = require('moment');
var _ = require('lodash');
var Server = require('../web/server.js');

var Actor = function(next) {
  _.bindAll(this, Object.keys(this.__proto__).filter((key) => typeof this.__proto__[key] === 'function'));

  this.server = new Server();
  this.server.setup(next);
}

Actor.prototype.init = function(data) {
  this.server.broadcastHistory(data);
};

Actor.prototype.processCandle = function(candle, next) {
  this.server.broadcastCandle(candle);

  next();
};

Actor.prototype.processAdvice = function(advice) {
  this.server.broadcastAdvice(advice);
};

module.exports = Actor;