const _ = require('lodash');
const fs = require('fs');
const path = require('path');

const parts = {
  paperTrader: 'config/plugins/paperTrader',
  candleWriter: 'config/plugins/candleWriter',
  performanceAnalyzer: 'config/plugins/performanceAnalyzer'
}

const gekkoRoot = __dirname + '/../../';

module.exports = function (ctx,next) {
  if(!_.has(parts, ctx.params.part))
    return ctx.body = 'error :(';
  return new Promise((resolve) => {
    const fileName = path.join(gekkoRoot, parts[ctx.params.part] + '.toml');
    fs.readFile(fileName, {encoding:'utf8'}, (err,data) => {
      ctx.body = { part : data} ;
      resolve();
    });  
  })
}