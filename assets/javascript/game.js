var mywins = 0;
var losses = 0;
var numToGuess = Math.floor(Math.random() * 101) + 19;
$("#numToGuess").text(numToGuess);



var crystalImage1 = Math.floor(Math.random() * 11) + 1;
var crystalImage2 = Math.floor(Math.random() * 11) + 1;
var crystalImage3 = Math.floor(Math.random() * 11) + 1;
var crystalImage4 = Math.floor(Math.random() * 11) + 1;


$("#mywins").html(mywins);
$("#losses").html(losses);

var counter = 0;
$("#currentScore").text(counter);

function restartGame() {

numToGuess = Math.floor(Math.random() * 101) + 19;
$("#numToGuess").text(numToGuess);
crystalImage1 = Math.floor(Math.random() * 11) + 1;
crystalImage2 = Math.floor(Math.random() * 11) + 1;
crystalImage3 = Math.floor(Math.random() * 11) + 1;
crystalImage4 = Math.floor(Math.random() * 11) + 1;
counter = 0;
$("#currentScore").text(counter);

}
function intro()
{   
    document.getElementById("intro").style.display = "inline-block";
}
function introToInstructions()
{   
    document.getElementById("intro").style.display = "none";
    document.getElementById("instructions2").style.display = "inline-block";
}
function instructions()
{   
    document.getElementById("instructions").style.display = "inline-block";
}

function goback()
{   
    document.getElementById("winner").style.display = "none";
    document.getElementById("loser").style.display = "none";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("intro").style.display = "none";
    document.getElementById("instructions2").style.display = "none";
}

function win() {

	document.getElementById("winner").style.display = "inline-block";
	mywins ++;
	$("#mywins").text(mywins);
	restartGame();
}

function lose() {

	document.getElementById("loser").style.display = "inline-block";
	losses ++;
	$("#losses").text(losses);
	restartGame();
}

$('#crystalImage1').on ('click', function(){
    counter = counter + crystalImage1;
    
    $('#currentScore').text(counter); 
          
        if (counter == numToGuess){
          win();
        }
        else if (counter > numToGuess){
          lose();
        }   
  });  

$('#crystalImage2').on ('click', function(){
    counter = counter + crystalImage2;
    
    $('#currentScore').text(counter); 
         
        if (counter == numToGuess){
          win();
        }
        else if (counter > numToGuess){
          lose();
        }   
  });  

$('#crystalImage3').on ('click', function(){
    counter = counter + crystalImage3;
    
    $('#currentScore').text(counter); 
          
        if (counter == numToGuess){
          win();
        }
        else if (counter > numToGuess){
          lose();
        }   
  });  

$('#crystalImage4').on ('click', function(){
    counter = counter + crystalImage4;
    
    $('#currentScore').text(counter); 
         
        if (counter == numToGuess){
          win();
        }
        else if (counter > numToGuess){
          lose();
        }   
  });  

  intro();




