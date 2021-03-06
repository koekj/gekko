// Relay the backtest message it when it comes in.

module.exports = done => {
  let backtest;

  return {
    message: (msg) => {
      if(msg.type === 'error') {
        done(msg.error);
      } else if(msg.type === 'info')
        console.log(msg.message);
      
      else if(msg.type === 'log')
        console.log(msg.message);
      else {
        console.log(msg.message);
      }
      
      if(msg.backtest) {
        done(null, msg.backtest);
      }
    },
    exit: status => {
      if(status !== 0) {
        if(backtest)
          console.error('Child process died after finishing backtest');
        else
          done('Child process has died.');
      }
    }
  }
}