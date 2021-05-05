var canvas;
var gamestate=0;
var playercount;
var form, player, game;
var database;

function setup() {
    canvas = createCanvas(400, 400);
    database= firebase.database();
    console.log(database);
    game = new Game();
    game.getstate();
    game.start();
}

function draw() {

}