document.getElementById("img").src = "offbulb.png";
document.getElementById("text").innerHTML = "OFF"
document.getElementById("off").style.backgroundColor = "yellow"

function btnon() {
    document.getElementById("img").src = "onbulb.png";
    document.getElementById("text").innerHTML = "ON"
    document.getElementById("on").style.backgroundColor = "yellow"
    document.getElementById("on").style.Color = "white"
    document.getElementById("off").style.backgroundColor = "white"
    document.getElementById("off").style.Color = "black"
}

function btnoff() {
    document.getElementById("img").src = "offbulb.png";
    document.getElementById("text").innerHTML = "OFF"
    document.getElementById("off").style.backgroundColor = "yellow"
    document.getElementById("off").style.Color = "white"
    document.getElementById("on").style.backgroundColor = "white"
    document.getElementById("on").style.Color = "black"
}
