const display = document.getElementById("display")
let count = 0

document.getElementById("add").onclick = function(){
    count++;
    display.textContent = count;
}

document.getElementById("reset").onclick = function(){
    count = 0
    display.textContent = count;
}

document.getElementById("subtract").onclick = function(){
    count--;
    display.textContent = count;
}