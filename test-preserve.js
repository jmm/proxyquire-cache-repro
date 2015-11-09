var assert = require("assert");
var stubs = {};

// ensure we don't get any module from the cache, but to load it fresh every time
var proxyquire = require('proxyquire').noPreserveCache();

proxyquire.preserveCache();

var foo1 = proxyquire('./foo', stubs);
var foo2 = proxyquire('./foo', stubs);
var foo3 = require('./foo');

// foo1, foo2 and foo3 are the same instance
assert.equal(foo1, foo2, "foo1 !== foo2");
assert.equal(foo1, foo3, "foo1 !== foo3");
