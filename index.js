'use strict';

var functionsHaveNames = function functionsHaveNames() {
	return function f() {}.name === 'f';
};

var gOPD = Object.getOwnPropertyDescriptor;

functionsHaveNames.functionsHaveConfigurableNames = function functionsHaveConfigurableNames() {
	return functionsHaveNames() && gOPD && !!gOPD(function () {}, 'name').configurable;
};

module.exports = functionsHaveNames;
