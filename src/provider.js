var each   = require('each')
  , extend = require('extend')
  , type   = require('type');


module.exports = Provider;


function Provider (options, ready) {
  var self = this;
  // Set up a queue of { method : 'identify', args : [] } to call
  // once we are ready.
  this.queue = [];
  this.ready = false;

  // Allow for `options` to only be a string if the provider has specified
  // a default `key`, in which case convert `options` into a dictionary.
  if (type(options) !== 'object') {
    if (type(options) === 'string' && this.key) {
      var key = options;
      options = {};
      options[this.key] = key;
    } else {
      throw new Error('Could not resolve options.');
    }
  }
  // Extend the options passed in with the provider's defaults.
  extend(this.options, options);

  // Wrap our ready function to first read from the queue.
  var dequeue = function () {
    each(self.queue, function (call) {
      var method = call.method
        , args   = call.args;
      self[method].apply(self, args);
    });
    self.ready = true;
    self.queue = [];
    ready();
  };

  // Call the provider's initialize object.
  this.initialize.call(this, this.options, dequeue);
}


// Helper to add provider methods to the prototype chain, for adding custom
// providers. Modeled after [Backbone's `extend` method](https://github.com/documentcloud/backbone/blob/master/backbone.js#L1464).
Provider.extend = function (properties) {
  var parent = this;
  var child = function () { return parent.apply(this, arguments); };
  var Surrogate = function () { this.constructor = child; };
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate();
  extend(child.prototype, properties);
  return child;
};


// Add to the default Provider prototype.
extend(Provider.prototype, {

  // Override this with any default options.
  options : {},

  // Override this if our provider only needs a single API key to
  // initialize itself, in which case we can use the terse initialization
  // syntax:
  //
  //     analytics.initialize({
  //       'Provider' : 'XXXXXXX'
  //     });
  //
  key : undefined,

  // Override to provider your own initialization logic, usually a snippet
  // and loading a Javascript library.
  initialize : function (options, ready) {
    ready();
  },

  /**
   * Adds an item to the queue
   * @param  {String} method ('track' or 'identify')
   * @param  {Object} args
   */
  enqueue : function (method, args) {
    this.queue.push({
      method : method,
      args : args
    });
  }
});