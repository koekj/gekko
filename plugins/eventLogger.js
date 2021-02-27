const log = require('../core/log');
const _ = require('lodash');
const subscriptions = require('../subscriptions');
const config = require('../core/util').getConfig().eventLogger;

const EventLogger = function() {}

subscriptions.forEach(sub => {
  if(config.whitelist && !config.whitelist.includes(sub.event)) {
    return;
  }

  EventLogger.prototype[sub.handler] = function(event, next) {
    log.info(`\t\t\t\t[EVENT ${sub.event}]\n`, event);
    if(_.isFunction(next))
      next();
  }
});

module.exports = EventLogger;