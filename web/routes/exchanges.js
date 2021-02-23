const _ = require('lodash');
const fs = require('fs');
const path = require('path');

const gekkoRoot = path.join(__dirname, '..', '..');
var util = require(path.join(gekkoRoot, 'core', 'util'));

var config = {};

config.debug = false;
config.silent = false;

util.setConfig(config);

module.exports = function (ctx,next) {
  return new Promise((resolve) => {
    const allCapabilities = [];
    const dir = path.join(gekkoRoot, 'exchange', 'wrappers');
    fs.readdir(dir, function(err, files ) {
        files.filter(f => f.endsWith(".js"))
        .map(f => f.slice(0, -3)).forEach((exchange) => {
          try {
            const file = path.join(gekkoRoot, 'exchange', 'wrappers', exchange);
            const Trader = require(file);
            if (!Trader || !Trader.getCapabilities) {
              return;
            }
            allCapabilities.push(Trader.getCapabilities());

          } catch (e) {
          return;
          }
      
      
        });
        ctx.body = allCapabilities;
        resolve();  
    });  
  });
}