module.exports = cb => {

  return {
    message: msg => {

      if(msg.event === 'marketUpdate')
        cb(null, {
          done: false,
          latest: msg.payload
        })

      else if(msg.type === 'error') {
        cb(msg.error);
      }

      else if(msg.type === 'info')
        console.log(msg.message);
        
      else if(msg.type === 'log')
        console.log(msg.message);
      else {
        console.log(msg.message);
      }
    },
    exit: status => {
      if(status !== 0)
        return cb('Child process has died.');
      else
        cb(null, { done: true });
    }
  }
}