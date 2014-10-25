var _ = require('underscore');

var defaults = {};

function render(view, locals) {
  locals = locals || {};

  return function (req, res) {
    var data = _.defaults(locals, defaults);
    res.render(view, data);
  };
}

/**
 * Assigns default local `key` to `value`, or merges default locals with `key`
 * when it is an `object`.
 *
 * @param {String} key default local key name
 * @param {String|Object|Number} value default local key value
 * @api public
 */
render.set = function (key, value) {
  if (arguments.length < 2 && _.isObject(key)) {
    _.extend(defaults, key);
  } else {
    defaults[key] = value;
  }
};

/**
 * Gets default local `key` value.
 *
 * @param {String} key default local key name
 * @param {String|Object|Number} value
 * @api public
 */
render.get = function (key) {
  return defaults[key];
};

module.exports = render;
