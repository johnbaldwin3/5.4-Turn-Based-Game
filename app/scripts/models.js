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
    power: 1,
    defense: 5,
    speed: 100,
    equipment: "none"
  };
  $.extend(this, defaults, config);

}

/***********************************
//create heroes
***********************************/

function Hero(config) {

  var defaults = {name: "I'm a hero"};
  this.attack = function (target, powerMod){
    var attDamage = this.power+powerMod;
    // console.log(target.health);
    target.health -= attDamage;
    // console.log(target.health);
    console.log("hero attacks");
    $('.combat-log').append("You hit " + target.name + " for " + attDamage);
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
jock.name = "jock";
jock.displayName = "Brad";
jock.image = "https://pbs.twimg.com/profile_images/1303351825/8bit-JaredFace_400x400.jpg";
jock.health += _.random(5,15);
jock.speed += _.random(1,10);
jock.power = 9 + _.random(1,3);
jock.equipment = "Baseball Bat";
var rebel = new Hero();
rebel.name = "rebel";
rebel.displayName = "James";
rebel.image = "http://blog.spoongraphics.co.uk/wp-content/uploads/2013/04/pixel-character.jpg";
rebel.power = 8 + _.random(1,4);
rebel.health += _.random(5,10);
rebel.equipment = "Switchblade";
var prep = new Hero();
prep.name = "prep";
prep.displayName = "Tiffany";
prep.image = "http://static.tumblr.com/qj6i2rb/Mxnmc71sl/untitled.jpg";//"https://www.google.com/imgres?imgurl=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2Ff5%2F04%2F6c%2Ff5046cdd7f0aaa7bd1e5a6a5a4077caf.jpg&imgrefurl=https%3A%2F%2Fuk.pinterest.com%2Fpin%2F279223245618096969%2F&docid=WgEFABijoTHnkM&tbnid=mbhpHzk855IvCM%3A&vet=1&w=500&h=500&bih=659&biw=1280&q=8%20bit%20girl%20image&ved=0ahUKEwj51dqr_IXSAhWJiFQKHT6MAPoQMwgdKAEwAQ&iact=mrc&uact=8"
prep.defense += _.random(1,5);
prep.power = 8 + _.random(1,3);
prep.health += _.random(1,10);
prep.equipment = "Hairspray & Lighter";
var nerd = new Hero();
nerd.name = "nerd";
nerd.displayName = "Dexter";
nerd.image = "https://www.abeautifulsite.net/content/uploads/2014/08/bit-face.png";
nerd.speed += _.random(10,30);
nerd.power = 7 + _.random(1,4);
nerd.health += _.random(1,5);
nerd.defense += _.random(1,3);
nerd.equipment = "Really sharp #2 pencil";

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
Villain.prototype.attack = function (target, defBonus){
  var attDamage = (15 * this.power) - target.defense - defBonus;
  target.health -= attDamage;
  $('.combat-log').append("You were hit for " + attDamage);
};

// Villains List
var clown = Villain.new();
clown.name = "Creepy Clown";
clown.image = "http://orig13.deviantart.net/274e/f/2012/067/c/8/scary_clown_bit_by_karinagarcia-d4s6lpf.jpg";
clown.speed = 90;
clown.health = 115;

var chainsaw = Villain.new();
chainsaw.name = "Chainsaw Maniac";
chainsaw.power = 2;
chainsaw.speed = 75;
chainsaw.image = "http://orig07.deviantart.net/0114/f/2014/296/0/1/leatherface_by_8_bitavatars-d83v7w8.png";


var knives = Villain.new();
knives.name = "Knife-Hand";
knives.speed = 130;
knives.health = 90;
knives.image = "http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/12940211_1724245117797619_163580205_n.jpg?ig_cache_key=MTIyNDI3OTAzODQzMjQ4NTU0NQ%3D%3D.2";


var corpse = Villain.new();
corpse.name = "Living Corpse";
corpse.health = 130;
corpse.speed = 45;
corpse.image = "http://3.bp.blogspot.com/-alJxgL8NWxc/To2QBA2bE2I/AAAAAAAAAGA/SwvxMqHWruE/s1600/Zombie+Headshot.jpg";


var villainArray = [clown, chainsaw, knives, corpse];
// console.log(villainArray);
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
  // 'badguy': badguy
};
