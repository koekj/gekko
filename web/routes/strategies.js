const _ = require('lodash');
const fs = require('fs');
const path = require('path');

const gekkoRoot = path.join(__dirname, '..', '..');

module.exports = function (ctx,next) {
  return new Promise((resolve, reject) => {
    var strats = [];
    fs.readdir(path.join(gekkoRoot, 'strategies'), function(err,files) {
        files.filter(f => f.endsWith(".js") )
        .map(f => {
          strats.push( { name: f.slice(0, -3), params : '' } );
        });
        // for every strat, check if there is a config file and add it
        const stratConfigPath = path.join(gekkoRoot, 'config', 'strategies');
        fs.readdir(stratConfigPath, function(err, files) {
          strats
              .filter((strat) => files.includes(strat.name + '.toml') )
              .forEach((strat) => {
                const filename = path.join(stratConfigPath, strat.name + '.toml');
                fs.readFile(filename, { encoding: 'utf8'}, (err,data) => {
                  strat.params = data;
                });
              });
          ctx.body = strats;
          resolve();
        });
    });
  });
}