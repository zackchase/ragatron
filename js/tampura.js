// Play Tampura
//Create the audio tag
var tampuraFile = document.createElement("audio");
tampuraFile.preload = "auto";

//Load the sound file (using a source element for expandability)
var src = document.createElement("source");
src.src = "raga_a_gents_pancham.mp3";
tampuraFile.appendChild(src);

//Load the audio tag
//It auto plays as a fallback
tampuraFile.load();
tampuraFile.loop = true;
tampuraFile.volume = .5;
//tampuraFile.play();


//Plays the sound
function play() {
   //Set the current time for the audio file to the beginning
   tampuraFile.currentTime = 0.01;

   //Due to a bug in Firefox, the audio needs to be played after a delay
   setTimeout(function(){tampuraFile.play();},1);
}


var tampuraOn = false;
//Controls for onscreen widgets
$("#tampuraButton").click(function(){
    if (tampuraOn) {
        tampuraOn = false;
        tampuraFile.pause();
    }
    else {
        tampuraOn = true;
        tampuraFile.play();

    }

});

