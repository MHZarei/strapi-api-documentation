'use strict';

/**
 * A set of functions called "actions" for `testapi`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  }
};
