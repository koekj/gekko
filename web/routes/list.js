const cache = require('../state/cache');

module.exports = function(name) {
  return function (ctx,next) {
    ctx.body = cache.get(name).list();
  }
}