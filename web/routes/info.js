const p = require('../../package.json');

// Retrieves API information
module.exports = function (ctx,next) {
  ctx.body = {
    version: p.version
  }
}