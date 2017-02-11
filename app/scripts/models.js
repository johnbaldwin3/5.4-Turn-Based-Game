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
    power: Math.random().toFixed(2),
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
  this.attack = function (){
    badguy.health -= Math.floor(15 * this.power);

  // hero should have name
  // health variable?? or just same as default??
  // weapons
  // damage capability
  // alternate damage or spell capability
  // image
  // possible weakness??

  // var character = Character.call(this, config);
  // console.log('character', character);
    $.extend(this, defaults, config);
};
}

Hero.prototype = new Character();

// Hero.new = function(config) {
//   config = config || {}
//   return new Hero(config);
// };

// console.log('here', );
// Hero create Test
var goodguy = new Hero();


// console.log("name",goodguy.name,"health",goodguy.health);
// var jock = new Hero({name: "jock"})
// console.log("jock",jock)
// Hero's List
var jock = new Hero();
jock.displayName = "Brad";
jock.image = "https://pbs.twimg.com/profile_images/1303351825/8bit-JaredFace_400x400.jpg";
var rebel = new Hero();
rebel.name = "rebel";
rebel.displayName = "James";
rebel.image = "http://blog.spoongraphics.co.uk/wp-content/uploads/2013/04/pixel-character.jpg";
var prep = new Hero();
prep.name = "prep";
prep.displayName = "Tiffany";
 prep.image = "http://static.tumblr.com/qj6i2rb/Mxnmc71sl/untitled.jpg";//"https://www.google.com/imgres?imgurl=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2Ff5%2F04%2F6c%2Ff5046cdd7f0aaa7bd1e5a6a5a4077caf.jpg&imgrefurl=https%3A%2F%2Fuk.pinterest.com%2Fpin%2F279223245618096969%2F&docid=WgEFABijoTHnkM&tbnid=mbhpHzk855IvCM%3A&vet=1&w=500&h=500&bih=659&biw=1280&q=8%20bit%20girl%20image&ved=0ahUKEwj51dqr_IXSAhWJiFQKHT6MAPoQMwgdKAEwAQ&iact=mrc&uact=8"
var nerd = new Hero();
nerd.name = "nerd";
nerd.displayName = "Dexter";
nerd.image = "https://www.abeautifulsite.net/content/uploads/2014/08/bit-face.png";

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
var clown = Villain.new();
clown.name = "Creepy Clown";

var chainsaw = Villain.new();
chainsaw.name = "Chainsaw Maniac";

var knives = Villain.new();
knives.name = "Knife-Hand";

var corpse = Villain.new();
corpse.name = "Living Corpse";

var villainArray = [clown, chainsaw, knives, corpse];
console.log(villainArray);
// console.log(badguy);
// console.log("name",badguy.name,"health", badguy.health);

module.exports = {
  'villainArray' : villainArray,
  'herosArray' : herosArray,
  'jock' : jock,
  'rebel' : rebel,
  'prep' : prep,
  'nerd' : nerd,
  'goodguy': goodguy,
  'badguy': badguy
};
