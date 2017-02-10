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
  config = config || {};
  var defaults = {
    name: "Character",
    health: 100,
    power: Math.random(),
    defense: 100,
    speed: 100
  };
  $.extend(this, defaults, config);

}

/***********************************
//create heroes
***********************************/

function Hero(config) {
  var defaults = {name: "I'm a hero"};
  // hero should have name
  // health variable?? or just same as default??
  // weapons
  // damage capability
  // alternate damage or spell capability
  // image
  // possible weakness??
  var character = Character.call(this, config);
    $.extend(this, character, defaults);
}

Hero.prototype = new Character();
Hero.new = function() {
  return new Hero();
};
// Hero create Test
var goodguy = Hero.new();
goodguy.attack = function (){
  badguy.health -= Math.floor(15 * this.power);
};
goodguy.name = 'good guy';
// console.log("name",goodguy.name,"health",goodguy.health);

// Hero's List
var jock = Hero.new();
jock.name = "Brad";
var rebel = Hero.new();
rebel.name = "James"
var prep = Hero.new();
prep.name = "Tiffany";
var nerd = Hero.new();
nerd.name = "Dexter";

var herosArray = [jock,rebel,prep,nerd];

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
badguy.attack = function (){
  goodguy.health -= Math.floor(15 * this.power);
};

// Villains List
// clown.name = "Pennywise";

// console.log(badguy);
// console.log("name",badguy.name,"health", badguy.health);

module.exports = {
  'herosArray' : herosArray,
  // 'jock' : jock,
  'goodguy': goodguy,
  'badguy': badguy,
};
