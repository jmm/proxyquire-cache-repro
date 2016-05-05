var assert = require("assert");
var stubs = {};

var proxyquire = require('proxyquire');

var preserve = process.argv.indexOf("--preserve") >= 0;

proxyquire[(
  preserve ?
  "preserve" :
  "noPreserve"
) + "Cache"]();

var foo1 = require("./foo");
var foo2 = proxyquire("./foo", stubs);
var foo3 = require("./foo");

var msg = `foo1 ${preserve ? "=" : "!"}= foo3`;

assert[
  preserve ?
  "equal" :
  "notEqual"
](foo1, foo3, msg);

console.log(msg);
