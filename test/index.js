'use strict';

var test = require('tape');

var hasNames = require('../');

test('named functions', function (t) {
	function f() {} // eslint-disable-line func-style
	var g = function h() {};

	t.equal(hasNames(), f.name === 'f' && g.name === 'h', 'functions have names or not as expected');

	t.end();
});
