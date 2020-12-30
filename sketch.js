//-----------------------------------------------------------//
//variables
Log( "Log" , "variables creating");
//--------------------------------//
var Player , Name ;
var Wall1,Wall2,Wall3,Wall4,Wall5,Wall6,Wall7,Wall8,Wall9,Wall10,Wall11,Wall12,Wall13,Wall14,Wall15,Wall16,Wall17,Wall18,Wall19,Wall20,Wall21,Wall22,Wall23,Wall24,Wall25,Wall26,Wall27,Wall28,Wall29,Wall30,Wall31,Wall32,Wall33,Wall34,Wall35;
var choice = 1;
var CODe;
var time=12;
var power = 5;
//--------------------------------//
Log( "Log" , "variables created");
//-----------------------------------------------------------//
/*
//preload
function preload()
{
  
}
*/
//-----------------------------------------------------------//
//setup
function setup()
{
  //--------------------------------//
  Log( "Log" , "setting up" );
  //--------------------------------//
  createCanvas( displayWidth , displayHeight );
  //--------------------------------//
  //sprites creating
  Player = createSprite( 0 , -35 , 10 , 10 );
  Player.shapeColor = "Blue" ;
  Player.visible = true;
  //-----------//
  Wall7  = createSprite( 100 , -60 , 200 , 10 );
  Wall8  = createSprite( 200 , 40 , 200 , 10 );
  Wall9  = createSprite( 100 , 75 , 10 , 80 );
  Wall10 = createSprite( 100 , 185 , 10 , 50 );
  Wall11 = createSprite( 245 , 160 , 300 , 10 );
  Wall12 = createSprite( 200 , 220 , 10 , 110 );
  Wall13 = createSprite( 200 , 80 , 10 , 75 );
  Wall14 = createSprite( 300 , -40 , 10 , 270 );
  Wall15 = createSprite( 390 , 190 , 10 , 50 );
  Wall16 = createSprite( 320 , 210 , 140 , 10 );
  Wall17 = createSprite( 250 , -180 , 300 , 10 );
  Wall18 = createSprite( 395 , -80 , 10 , 200 );
  Wall19 = createSprite( 395 , 100 , 200 , 10 );
  Wall20 = createSprite( 500 , -20 , 10 , 320 );
  Wall21 = createSprite( 600 , -175 , 200 , 10 );
  Wall22 = createSprite( 500 , 240 , 10 , 70 );
  Wall23 = createSprite( 595 , 200 , 200 , 10 );
  Wall24 = createSprite( 690 , 160 , 10 , 70 );
  Wall25 = createSprite( 630 , 130 , 120 , 10 );
  Wall26 = createSprite( 700 , -90 , 10 , 180 );
  Wall27 = createSprite( 750 , 170 , 10 , 210 );
  Wall28 = createSprite( 670 , 70 , 150 , 10 );
  Wall29 = createSprite( 600 , 0 , 10 , 150 );
  Wall30 = createSprite( 730 , 0 , 70 , 10 );
  Wall31 = createSprite( 760 , -160 , 10 , 180 );
  Wall32 = createSprite( 800 , 120 , 100 , 10 );
  Wall33 = createSprite( 850 , 230 , 10 , 100 );
  Wall34 = createSprite( 850 , 0 , 10 , 300 );
  Wall35 = createSprite( 12000 , 120 , 100 , 100 );

  Wall1  = createSprite( 0 , 130 , 10 , 300 );
  Wall2  = createSprite( 500 , 275 , 1000 , 10 );
  Wall3  = createSprite( 1000 , 95 , 10 , 370 );
  Wall4  = createSprite( 1000 , -200 , 10 , 100 );
  Wall5  = createSprite( 505 , -250 , 1000 , 10 );
  Wall6  = createSprite( 0 , -155 , 10 , 200 );
  Darking();
  //-----------//
  Log( "Log" , "setup done" );
  //--------------------------------//
  //before we start
  dialog( "ALERT" , "Press Enter when the correct direction is shown on the top" );
  Name = prompt( "Name yourself" );
  //--------------------------------//
}
//-----------------------------------------------------------//
function draw()
{
  needs( "black" );
  PositioningName();
  movement();
  HardKey();
  BOUNCE();
}
//-----------------------------------------------------------//