//--------------------------------------------------------------------------------//
//Costume function
//--------------------------------//
//basic needs
function needs( color )
{
    if( frameCount === 1 )
    {
        Log( "Log" , "triggering the loop" );
    }
    background( color );
    drawSprites(); 
}
//--------------------------------//
//quick console
function Log( type , message )
{
    var ytrewq = type.toLowerCase();
    switch (ytrewq) {
        case "log":
            console.log( message );
            break;

        case "warn":
            console.warn( message );
            break;

        case "error":
            console.error( message );
            break;

        default:
            console.error( "message 'function' has invaid first value, the possible values are 'log', 'warn' & 'error'." );
    }
}
//--------------------------------//
//quick dialog
function dialog( type , message )
{
    var ytrewq = type.toLowerCase();
    switch (ytrewq) {
        case "alert":   
            alert( message );
            break;

        case "confirm":
            confirm( message );
            break;

        case "promt":
            prompt( message );
    
        default:
            console.error( "message 'dialog' has invaid first value, the possible values are 'alert' & 'confirm'." );
            break;
    }
}
//--------------------------------//
function TExt( message , x , y , color )
{
    push();
    fill( color );
    text( message , x , y );
    pop();
}
//--------------------------------//
function PositioningName()
{
    TExt( Name , Player.x-3*Name.length , Player.y-15 , "white" , 20 );
}
//--------------------------------//
function movement()
{
    camera.x = Player.x;
    camera.y = Player.y;

    if( keyIsDown(ENTER) )
    {
      if( CODe === 119 )
      {
          Player.y = Player.y - power;
      }
      if( CODe === 115 )
      {
          Player.y = Player.y + power;
      }
      if( CODe === 97 )
      {
          Player.x = Player.x - power;
      }
      if( CODe === 100 )
      {
          Player.x = Player.x + power;
      }
    }
}
//--------------------------------//
function BOUNCE()
{
    Player.bounceOff( Wall1 );
    Player.bounceOff( Wall2 );
    Player.bounceOff( Wall3 );
    Player.bounceOff( Wall4 );
    Player.bounceOff( Wall5 );
    Player.bounceOff( Wall6 );
    Player.bounceOff( Wall7 );
    Player.bounceOff( Wall8 );
    Player.bounceOff( Wall9 );
    Player.bounceOff( Wall10 );
    Player.bounceOff( Wall11 );
    Player.bounceOff( Wall12 );
    Player.bounceOff( Wall13 );
    Player.bounceOff( Wall14 );
    Player.bounceOff( Wall15 );
    Player.bounceOff( Wall16 );
    Player.bounceOff( Wall17 );
    Player.bounceOff( Wall18 );
    Player.bounceOff( Wall19 );
    Player.bounceOff( Wall20 );
    Player.bounceOff( Wall21 );
    Player.bounceOff( Wall22 );
    Player.bounceOff( Wall23 );
    Player.bounceOff( Wall24 );
    Player.bounceOff( Wall25 );
    Player.bounceOff( Wall26 );
    Player.bounceOff( Wall27 );
    Player.bounceOff( Wall28 );
    Player.bounceOff( Wall29 );
    Player.bounceOff( Wall30 );
    Player.bounceOff( Wall31 );
    Player.bounceOff( Wall32 );
    Player.bounceOff( Wall33 );
    Player.bounceOff( Wall34 );
    Player.bounceOff( Wall35 );
}
//--------------------------------//
function HardKey()
{
    if( frameCount%time===0 )
    {
        choice++;
    }
    if( choice===5 )
    {
        choice = 1;
    }
    switch( choice )
    {
        case 1 : CODe = 97 ; TExt( "left" , camera.x-50 , camera.y-350 , "white" ) ; break;
        case 2 : CODe = 100 ; TExt( "right" , camera.x-50 , camera.y-350 , "white" ) ; break;
        case 3 : CODe = 119 ; TExt( "top" , camera.x-50 , camera.y-350 , "white" ) ; break;
        case 4 : CODe = 115 ; TExt( "bottom" , camera.x-50 , camera.y-350 , "white" ) ; break;
        default : log( "log" , "what?" ); ; break;
    }
}
//--------------------------------//
function Darking()
{
    Wall7 .shapeColor = " black " ;
    Wall8 .shapeColor = " black " ;
    Wall9 .shapeColor = " black " ;
    Wall10.shapeColor = " black " ;
    Wall11.shapeColor = " black " ;
    Wall12.shapeColor = " black " ;
    Wall13.shapeColor = " black " ;
    Wall14.shapeColor = " black " ;
    Wall15.shapeColor = " black " ;
    Wall16.shapeColor = " black " ;
    Wall17.shapeColor = " black " ;
    Wall18.shapeColor = " black " ;
    Wall19.shapeColor = " black " ;
    Wall20.shapeColor = " black " ;
    Wall21.shapeColor = " black " ;
    Wall22.shapeColor = " black " ;
    Wall23.shapeColor = " black " ;
    Wall24.shapeColor = " black " ;
    Wall25.shapeColor = " black " ;
    Wall26.shapeColor = " black " ;
    Wall27.shapeColor = " black " ;
    Wall28.shapeColor = " black " ;
    Wall29.shapeColor = " black " ;
    Wall30.shapeColor = " black " ;
    Wall31.shapeColor = " black " ;
    Wall32.shapeColor = " black " ;
    Wall33.shapeColor = " black " ;
    Wall34.shapeColor = " black " ;
    Wall35.shapeColor = " black " ;
}
//--------------------------------//
//--------------------------------------------------------------------------------//