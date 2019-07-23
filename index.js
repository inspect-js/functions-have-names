'use strict';

module.exports = function functionsHaveNames() {
	return function f() {}.name === 'f';
};
