var $ = require('jquery');
var _ = require('underscore');
var Handlebars = require('handlebars');
var index = require('../scripts/index.js');
var models = require('../scripts/models');

var heroTemplate = require('../templates/hero.hbs');
var enemyTemplate = require('../templates/enemy.hbs');
var charSelTemp = require('../templates/heroselect.hbs');
var endTemplate = require('../templates/endgame.hbs');


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

function endView(playerWin){
  playerWin ? $(".player-win-display").append("You survived this time...") : $(".player-lose-display").append("There were no survivors...")
  $('.fight-page').fadeOut(4000).hide();
  $('.end-page').fadeIn(4000).show();

}

$('.play-again-btn').on('click', function(){
  location.reload();
})


// enemyView(models.badguy);
// heroView(models.goodguy);

module.exports = {
  'enemyView': enemyView,
  'heroView': heroView,
  'endView' : endView
};

// console.log(models.herosArray);
