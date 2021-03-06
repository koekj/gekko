const _ = require('lodash');
const promisify = require('promisify-node');

const scan = promisify(require('../../core/workers/datasetScan/parent'));

// starts a scan
// requires a post body with configuration of:
// 
// - config.watch
const route = function (ctx,next) {
  return new Promise((resolve) => {
      var config = require('./baseConfig');
      _.merge(config, ctx.request.body);
      scan(config, (err,result) => {
        ctx.body = result;
        resolve();
      });
  })
};

module.exports = route;