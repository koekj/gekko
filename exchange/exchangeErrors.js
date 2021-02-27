const _ = require('lodash');

const ExchangeError = function(message) {
  _.bindAll(this);
  //also for the prototype of Readable
  _.bindAll(this, Object.keys(this.__proto__).filter((key) => typeof this.__proto__[key] === 'function'));

  this.name = "ExchangeError";
  this.message = message;
}
ExchangeError.prototype = new Error();

const ExchangeAuthenticationError = function(message) {
  _.bindAll(this);
  //also for the prototype of Readable
  _.bindAll(this, Object.keys(this.__proto__).filter((key) => typeof this.__proto__[key] === 'function'));

  this.name = "ExchangeAuthenticationError";
  this.message = message;
}
ExchangeAuthenticationError.prototype = new Error();

const RetryError = function(message) {
  _.bindAll(this);
  //also for the prototype of Readable
  _.bindAll(this, Object.keys(this.__proto__).filter((key) => typeof this.__proto__[key] === 'function'));

  this.name = "RetryError";
  this.retry = 5;
  this.message = message;
}
RetryError.prototype = new Error();

const AbortError = function(message) {
  _.bindAll(this);
  //also for the prototype of Readable
  _.bindAll(this, Object.keys(this.__proto__).filter((key) => typeof this.__proto__[key] === 'function'));

  this.name = "AbortError";
  this.message = message;
}
AbortError.prototype = new Error();

module.exports = {
  ExchangeError,
  ExchangeAuthenticationError,
  RetryError,
  AbortError
};

