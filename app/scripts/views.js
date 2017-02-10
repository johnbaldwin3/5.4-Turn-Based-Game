var $ = require('jquery');
var _ = require('underscore');
var Handlebars = require('handlebars');
var index = require('../scripts/index.js');
var models = require('../scripts/models');

var heroTemplate = require('../templates/hero.hbs');
var enemyTemplate = require('../templates/enemy.hbs');
var charSelTemp = require('../templates/heroselect.hbs');

console.log(models.badguy);
console.log(models.goodguy);
function characterSelect(characters){
  $('.character-select').append(charSelTemp());
}

//Enemy Display
function enemyView(character){
  // console.log(character);
  $('.enemy-info').html(enemyTemplate(character));
}
//Hero Display
function heroView(character){
  // console.log(character);
  $('.hero-info').html(heroTemplate(character));
}
console.log(enemyView(models.badguy));
console.log(heroView(models.goodguy));

module.exports = {
  'enemyView': enemyView,
  'heroView': heroView
};
