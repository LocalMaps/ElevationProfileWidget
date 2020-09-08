//1. Get the assertion instance and test interface from the global variable `intern`.
var assert = intern.getPlugin('chai').assert;
var registerSuite = intern.getInterface('object').registerSuite;


define([
  // 2. Require necessary modules to run your unit test. Use `define` syntax as you write your own module.
  'dojo/_base/config',
  'jimu/utils',
  './globals'
], function (dojoConfig, utils) {
  //3. Write unit test.
  registerSuite('test-jimu-utils', {
    'testReplace1': function () {
      var o1 = {
        a: 1,
        b: 2
      },
        p = {},
        o2;
      o2 = utils.replacePlaceHolder(o1, p);
      assert.deepEqual(o1, o2);
    }
  });
});
