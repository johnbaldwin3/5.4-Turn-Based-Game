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
$('.end-page').hide();
//Enemy Display
function enemyView(character,health){
  health = health || {}
  // console.log(character);
  $('.enemy-info').html(enemyTemplate(character));
  var health = character.health + '%';
  $('.enemy-health').width(health);

}
//Hero Display
function heroView(character){
  // console.log(character);
  $('.hero-info').html(heroTemplate(character));
  var health = character.health + '%';
  $('.health-bar').width(health);
}

// function updateEnemyHealth(){
//   var health = index.currentVillain.health;
//   $('.enemy-health').width(health);
// }

// updatePlayerHealth(character){
//
// }

function endView(playerWin){
  $('.fight-page').fadeOut(2000).hide();
  $('.end-page').fadeIn(2000).show();
  playerWin ? $(".player-win-display").append("You survived... this time...") : $(".player-lose-display").append("There were no survivors...")
}

$('.play-again-btn').on('click', function(){
  location.reload();
})

// function heroAttack(move){
//   $(".hero-last-move").html("");
//   $(".hero-last-move").append(index.selected + " used " + move + "!");
//
// }


// enemyView(models.badguy);
// heroView(models.goodguy);

module.exports = {
  'enemyView': enemyView,
  'heroView': heroView,
  'endView' : endView,
  // 'updateEnemyHealth' : updateEnemyHealth,
  // "updatePlayerHealth" : updatePlayerHealth
};

// console.log(models.herosArray);
