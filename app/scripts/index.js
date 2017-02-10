//console.log("Hello World!");
var models = require('../scripts/models');
var $ = require('jquery');
var _ = require('underscore');
var Handlebars = require('handlebars');
var index = require('../scripts/index.js');
var views = require('../scripts/views.js');

// var hero = require('app/templates/hero.hbs');
// var enemy = require('../templates/enemy.hbs');

/***********************************
//game start
***********************************/

//start game
  //select button and direct to new page

  //cue music?
  //direct to player selection screen
    //click button to go

/***********************************
//player select
***********************************/

//select player page

  //dropdown or panel page
  //select player chosen by user

//************

//after player is chosen
  //randomly generate enemy

//direct player to fight stage

/***********************************
//begin game
***********************************/

//begin game on go button

//display player/hero
  //display health

$('.hero-select').on('click', function (event){
  event.preventDefault();
  console.log("clicked");
  var url = $(this).attr("href");
  
  setTimeout(function() {
     window.location = url;
  }, 500);
});



//display the enemy
  //display some idea/representation of health

/***********************************
//Fight, Fight, Fight!
***********************************/

//show player's fight options
    //spell, weapon, whatever

//player must select fight action
  //after player selects action

$('.fight-btn').on('click', function (){
  models.goodguy.attack();
  views.enemyView(models.badguy);
  setTimeout(function(){counterAttack();}, 4000);
});

function counterAttack(){
  models.badguy.attack();
  views.heroView(models.goodguy);
}
//
// function attackEnemy (character){
//   console.log(models.badguy.health, models.goodguy.health);
//   character.health -=25;
//   console.log(models.badguy.health, models.goodguy.health);
//   views.enemyView(character);
//   // models.goodguy.health -=25;
//
//   enemyAttack();
//   console.log(models.badguy.health, models.goodguy.health);
//   console.log("goodguy attacked");
// }
//
// function enemyAttack(){
//   console.log("goodguy attacked");
//   models.goodguy.health -=25;
//   // views.heroView(models.goodguy);

// attackEnemy(models.badguy);
//begin attack
  //set some interval timeout to prevent immediate attack by enemy

//display some representation of attack
  //alter enemy health
  //determine if enemy is dead or alive
  //return estimate of damage done to enemy
  //end game if enemy dead....
    //go to game over/play again screen
  //else enemy is not dead.... (enemy attack)


//enemy automatically attacks
  //(pick type of attack and damage randomly)
  //some delay to display dmg to player/hero
  //change health of hero dependant upon attack
  //if hero/player is dead...
    //go to end game/play again screen
  // else proceed to players turn

//return to user options for next attack

/***********************************
//Game Over / Play Again
***********************************/

//display winner and loser
// prompt user to play again
// show stats?
// on play again, take user back to selection screen
// on end game, take player to start/splash page
// console.log("Hello World!");

// create
