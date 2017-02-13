var $ = require('jquery');
var _ = require('underscore');

var d4 = _.random(1,4);
var d6 = _.random(1,6);
var d8 = _.random(1,8);
var d10 = _.random(1,10);
var d12 = _.random(1,12);
var d20 = _.random(1,20);
console.log(d4, d6, d8, d10, d12, d20);
module.export = {
  'd4' : d4,
  'd6' : d6,
  'd8' : d8,
  'd10' : d10,
  'd12' : d12,
  'd20' : d20
};
