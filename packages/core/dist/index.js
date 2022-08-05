'use strict';

var src = require('@pmrepo/utils/src');

var core = function () {
    console.log('core change');
    src.log.info('test', 'Hello world!');
};
console.log('core change test');
src.log.info('test', 'Hello world!');

module.exports = core;
