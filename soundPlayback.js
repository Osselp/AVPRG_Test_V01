var context = new AudioContext();
var sound = new Audio("sounds/sound.wav");
var soundNote =context.createMediaElementSourceNode(sound);
var gainNode = context.createGain();
gainNode.gain.value=0.8;
sound.connect(gainNode);
gainNode.connect(cont.destination);
sound.play();
