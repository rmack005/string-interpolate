"use strict";

var expect = require('chai').expect;
require('../lib/interpolate');

describe('interpolation via an object',function() { 
	var result = "This is a {{test}}.".interpolate({"test": "successful test"});

	it('should produce a string', function() {
		expect(result).to.be.a('string');
	});
	
	it('should produce the expected string', function() {
		expect(result).to.equal('This is a successful test.');
	});
});

describe('interpolation via an array',function() { 
	var result = "This is a {{0}} {{1}}.".interpolate(["successful", "test"]);

	it('should produce a string', function() {
		expect(result).to.be.a('string');
	});
	
	it('should produce the expected string', function() {
		expect(result).to.equal('This is a successful test.');
	});
});

describe('interpolation of a nonexistent property',function() { 
	var result = "This is a {{nonexistent}}.".interpolate({"test": "successful test"});

	it('should produce a string', function() {
		expect(result).to.be.a('string');
	});
	
	it('should produce the expected string', function() {
		expect(result).to.equal('This is a {{nonexistent}}.');
	});
});

describe('interpolation of a nonexistent index',function() { 
	var result = "This is a {{0}} {{4}}.".interpolate(["successful", "test"]);

	it('should produce a string', function() {
		expect(result).to.be.a('string');
	});
	
	it('should produce the expected string', function() {
		expect(result).to.equal('This is a successful {{4}}.');
	});
});