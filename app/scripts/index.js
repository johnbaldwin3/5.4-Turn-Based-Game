//console.log("Hello World!");
var models = require('../scripts/models');
var $ = require('jquery');
var _ = require('underscore');
var Handlebars = require('handlebars');
var index = require('../scripts/index.js');
var views = require('../scripts/views.js');
var $audioIntro = $('#audio-intro');
// var hero = require('app/templates/hero.hbs');
// var enemy = require('../templates/enemy.hbs');

// $audioIntro.attr('src', './images/Ascension-Arp-02-copy.mp3');
//   $audioIntro.play();
//
// $('into-game').on('click', function(){
//   $audioIntro.stop();
// })

function audioFade() {

return  $audioIntro.animate({volume: 0.0}, 3000);
 // Pause after 2.1 seconds
 //  setTimeout( function() {
 //    $audioIntro.get(0).pause(); // .get gets the native DOM element
 // }, 2000)
}
/***********************************
//game start
***********************************/

//start game
  //select button and direct to new page
  $('.into-game').on('click', function(event){
    event.preventDefault();
    var url = "select.html";
    audioFade();
    setTimeout(function() {
       window.location = url;

    }, 5000);

  })
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

$('.character-select').on('click','.hero-select', function (event){
  event.preventDefault();
  // console.log(this);
  $('.character-select').fadeOut(4000).hide();
  $('body').removeClass('.character-select');
  $('.fight-page').fadeIn(4000).show();

  var selected = $(this).attr("id");
  // console.log("ss",selected);

  models.goodguy = models[selected];
  console.log("goodguy", models.goodguy);
  // console.log('gGuy', gGuy);
  // console.log(models.goodguy);
  // views.heroView(models.goodguy);
  // views.heroView(models.goodguy);
  views.heroView(models.goodguy);

  // setTimeout(function() {
  //    window.location = url;
  //
  // }, 500);
});

// goodguy = $heroArray.Hero.name


//display the enemy
  //display some idea/representation of health
var currentVillain = villainRandom(models.villainArray);

function villainRandom(array){
  var randomizer = Math.floor(Math.random()*4);
  // console.log(randomizer);
  return array[randomizer];
}
console.log(currentVillain);
views.enemyView(currentVillain);
/***********************************
//Fight, Fight, Fight!
***********************************/

//show player's fight options
    //spell, weapon, whatever

//player must select fight action
  //after player selects action

$('.fight-btn').on('click', function (){
  if (models.goodguy.speed >= currentVillain.speed){
    console.log("hero first");
    models.goodguy.attack(currentVillain, 0);
    views.enemyView(currentVillain);
    checkWin();
    counterAttack(0);
    checkWin();
  } else {
    console.log("hero last");
    counterAttack(0);
    checkWin();
    models.goodguy.attack(currentVillain, 0);
    views.enemyView(currentVillain);
    checkWin();
  }
});

$('.strong-btn').on('click', function (){
  console.log("hero last");
  counterAttack(0);
  checkWin();
  models.goodguy.attack(currentVillain, 5);
  views.enemyView(currentVillain);
  checkWin();
});

$('.defense-btn').on('click', function (){
  if (models.goodguy.speed >= currentVillain.speed){
    console.log("hero first");
    models.goodguy.attack(currentVillain, -1);
    views.enemyView(currentVillain);
    checkWin();
    counterAttack(5);
    checkWin();
  } else {
    console.log("hero last");
    counterAttack(5);
    checkWin();
    models.goodguy.attack(currentVillain, -1);
    views.enemyView(currentVillain);
    checkWin();
  }
});

$('.quick-btn').on('click', function (){
  console.log("hero first");
  models.goodguy.attack(currentVillain, -1);
  views.enemyView(currentVillain);
  checkWin();
  counterAttack(0);
  checkWin();
});

function counterAttack(defenseMod){
  currentVillain.attack(models.goodguy);
  models.goodguy.health += defenseMod;
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
function checkWin(){
  if (currentVillain.health <= 0){
    console.log("Player Wins");
    views.endView();

  } else if (models.goodguy.health <= 0){
    console.log("Bad Guy wins");
    views.endView();

  }
}
//display winner and loser
// prompt user to play again
// show stats?
// on play again, take user back to selection screen
// on end game, take player to start/splash page
// console.log("Hello World!");

// create
