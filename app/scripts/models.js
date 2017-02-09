var $ = require('jquery');
var _ = require('underscore');
var Handlebars = require('handlebars');
var index = require('../scripts/index.js')

//***********************************



/***********************************
//create a character constructor
***********************************/

function Character(config) {
  var defaults = {
    name: "Character",
    health: 100,
    attack: 100,
    defense: 100,
    speed: 100
  };
  $.extend(this, defaults, config);

}

/***********************************
//create heroes
***********************************/

function Hero() {

  // hero should have name
  // health variable?? or just same as default??
  // weapons
  // damage capability
  // alternate damage or spell capability
  // image
  // possible weakness??

}
Hero.prototype = new Character();
Hero.new = function() {
  return new Hero();
};
// Hero create Test
var elonMusk = Hero.new();
elonMusk.name = 'elonMusk';
console.log(elonMusk.name);
console.log(elonMusk.health);



/***********************************
//create villians
***********************************/

function Villain() {
  //villain should have name
  //health variable?? or same as default??
  //weapons
  //damage capability
  //alternate damage or spell capaiblity
  //image
  //possible weakness
}
Villain.prototype = new Character();
Villain.new = function() {
  return new Villain();
};
