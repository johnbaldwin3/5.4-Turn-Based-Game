var $ = require('jquery');
var _ = require('underscore');
var Handlebars = require('handlebars');
var index = require('../scripts/index.js');

var hero = require('../templates/hero.hbs');
var enemy = require('../templates/enemy.hbs');


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
var goodguy = Hero.new();
goodguy.name = 'good guy';
// console.log("name",goodguy.name,"health",goodguy.health);



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
// Hero create Test
var badguy = Villain.new();
badguy.name = 'bad guy';
console.log(badguy);
console.log("name",badguy.name,"health", badguy.health);

module.exports = {
  'goodguy': goodguy,
  'badguy': badguy
};
