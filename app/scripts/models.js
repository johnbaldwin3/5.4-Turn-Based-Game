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
jock.image = "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=imgres&cd=&cad=rja&uact=8&ved=0ahUKEwiY09as-4XSAhUKyoMKHRWnAf0QjRwIBw&url=https%3A%2F%2Ftwitter.com%2Fjaredbotha&psig=AFQjCNFIV9UxelQfhKReJT22lCkMugWfnw&ust=1486831021537503"
var rebel = Hero.new();
rebel.name = "James"
rebel.image = "http://blog.spoongraphics.co.uk/wp-content/uploads/2013/04/pixel-character.jpg"
var prep = Hero.new();
prep.name = "Tiffany";
prep.image = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2Ff5%2F04%2F6c%2Ff5046cdd7f0aaa7bd1e5a6a5a4077caf.jpg&imgrefurl=https%3A%2F%2Fuk.pinterest.com%2Fpin%2F279223245618096969%2F&docid=WgEFABijoTHnkM&tbnid=mbhpHzk855IvCM%3A&vet=1&w=500&h=500&bih=659&biw=1280&q=8%20bit%20girl%20image&ved=0ahUKEwj51dqr_IXSAhWJiFQKHT6MAPoQMwgdKAEwAQ&iact=mrc&uact=8"
var nerd = Hero.new();
nerd.name = "Dexter";
nerd.image = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.abeautifulsite.net%2Fcontent%2Fuploads%2F2014%2F08%2Fbit-face.png&imgrefurl=https%3A%2F%2Fwww.abeautifulsite.net%2Fhow-to-generate-8-bit-avatars&docid=_cQ-0D6BqxxXiM&tbnid=Oy6crqgQ8a3_PM%3A&vet=1&w=768&h=768&bih=659&biw=1280&q=8%20bit%20character%20image&ved=0ahUKEwiD86Od_IXSAhUjwVQKHSFUA7M4ZBAzCCooKDAo&iact=mrc&uact=8"

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
