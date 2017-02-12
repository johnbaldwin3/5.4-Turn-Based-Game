var $ = require('jquery');
var _ = require('underscore');
var Handlebars = require('handlebars');
var index = require('../scripts/index.js');
var models = require('../scripts/models');

var heroTemplate = require('../templates/hero.hbs');
var enemyTemplate = require('../templates/enemy.hbs');
var charSelTemp = require('../templates/heroselect.hbs');


// $('.fight-page').html().hide();
// console.log(models.badguy);
// console.log(models.goodguy);

_.forEach(models.herosArray, function characterSelect(characters){
  $('.character-select').append(charSelTemp(characters));
  // console.log("i've been called");
});


// console.log(models.badguy);
// console.log(models.goodguy);
$('.fight-page').hide();
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

function endView(){
  alert('you won, or lost...');
  // location.reload();
}

// enemyView(models.badguy);
// heroView(models.goodguy);

module.exports = {
  'enemyView': enemyView,
  'heroView': heroView,
  'endView' : endView
};

// console.log(models.herosArray);
