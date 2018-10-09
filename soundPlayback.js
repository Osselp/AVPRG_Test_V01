var context = new AudioContext();   //Besser global geeignet

var drumpads = document.getElementsByClassName("drumpad");
soundbuffers=[];

for(let i=0; i< drumpads.length;i++){
    soundbuffers[i] = new Audio("sounds/sound"+(i+1)+".wav");
    var soundNode = context.createMediaElementSource(soundbuffers[i]);
    var gainNode = context.createGain();
    gainNode.gain.value=0.8;

    soundNode.connect(gainNode);
    gainNode.connect(context.destination);

    drumpads[i].addEventListener("mousedown", function(){
        playSound //Missing Part
    })
}

function playSound(value){
    soundbuffers[value].play;
}


