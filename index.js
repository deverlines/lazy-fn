/**
 *
 * @param {function} callback
 * @param {int} delay
 */
let lazyFn = function (callback, delay = 0) {
  setTimeout(() => {
    callback();
  }, delay);
};

window.lazyFn = lazyFn;

export default lazyFn;
