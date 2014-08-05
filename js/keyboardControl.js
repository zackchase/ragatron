
var keysPressed = [];

//create an oscillator for each note?

oscillators = {};


$("body").keydown(function(event) {

    //console.log("KeyDown Event: " + event.which);
    event.preventDefault();
    // Determine if the note is already being held down
    if (keysPressed.indexOf(event.which) > -1) {
        //console.log("Keys Pressed: " + keysPressed);
        console.log("key already pressed");
        return;
    }


    // If this is a new note, initiate sound synthesis
    else {

        if ( ragaCharToStep[event.which] != undefined ){
            keysPressed.push(event.which);
            step = ragaCharToStep[event.which];
            oscillators[event.which] = audioCtx.createOscillator();
            oscillators[event.which].connect(gainNode);
            oscillators[event.which].type = "square";
            oscillators[event.which].frequency.value = ragaStepToPitch(step,base);
            oscillators[event.which].start();
        }
        // make shift key toggle raga
        else if (event.which == 16) {

            scale = (scale +1) % pentatonicRagaCodes.length;
            chosenRaga = pentatonicRagaCodes[scale].scale;
            console.log("Scale switched to : " + scale);

        }



        console.log("Keys Pressed: " + keysPressed);

    }

});

$("body").keyup(function(event){
    if (keysPressed.indexOf(event.which) > -1){
        oscillators[event.which].stop();
        delete oscillators[event.which];
        index = keysPressed.indexOf(event.which);
        keysPressed.splice(index,1);
    }
    console.log("Keys Pressed: " + keysPressed);

});



function ragaStepToPitch(step, base){
    var local_base = base;
    var local_step = step
    while (local_step >= 5) {
        local_base *= 2;
        local_step -= 5;

    }
    return stepToPitch(chosenRaga[local_step], local_base);
}

function stepToPitch (step, base){

    if (justIntonation){
        pitch = justPitch(base,step);
        console.log("Step: " + step + ", Base: " + base + ", Pitch: " + pitch);


    }
    else {
        pitch = base * Math.pow(r, step);
        console.log("Step: " + step + ", Base: " + base + ", Pitch: " + pitch);
    }
    return pitch;

}

