const cache = require('../state/cache');
const gekkoManager = cache.get('gekkos');

// Deletes a gekko
// requires a post body with an id
module.exports = function (ctx,next) {

  let id = ctx.request.body.id;

  if(!id) {
    ctx.body = { status: 'not ok' }
  } else {    
    try {
      gekkoManager.delete(id);
      ctx.body = { status: 'ok' };
    } catch(e) {
      ctx.body = { status: e.message }
    }    
s  }
}