const cache = require('../state/cache');
const manager = cache.get('apiKeyManager');

module.exports = {
  get: function (ctx,next) {
    ctx.body = manager.get();
  },
  add: function (ctx,next) {
    const content = ctx.request.body;

    manager.add(content.exchange, content.values);

    ctx.body = {
      status: 'ok'
    };
  },
  remove: function (ctx,next) {
    const exchange = ctx.request.body.exchange;

    manager.remove(exchange);

    ctx.body = {
      status: 'ok'
    };
  }
}