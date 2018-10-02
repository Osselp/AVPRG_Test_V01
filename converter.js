//Java Script
var allFrequencies = 

function calculateFrequency(){
    var inputValue = document.getElementById("myInput").value;  //Element mit ID "myInput" wird verwendet
                                                                //Document verweist auf dieses document
    if(inputValue <= 127 && inputValue >=0 && inputValue !==""){    //Wenn Inputfeld-Eingabe kleiner/gleich 127, größer/gleich 0 und nicht leer
        document.getElementById("outputText").innerHTML = "Lösung " + allFrequencies[inputValue];
            //ID outputText wird ausgewählt im html zur Änderung
    }else{
        document.getElementById("outputText").innerHTML = "Bitte nochmal eine Zahl eingeben!";
    }
}

document.getElementById("myButton").addEventListener("click", function(){
    calculateFrequency();
});