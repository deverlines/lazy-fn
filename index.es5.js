"use strict";

/**
 *
 * @param {function} callback
 * @param {int} delay
 */
var lazyFn = function lazyFn(callback) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  setTimeout(function () {
    callback();
  }, delay);
};

window.lazyFn = lazyFn;