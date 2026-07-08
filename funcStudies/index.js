let username;
let title = document.getElementById("myH1").textContent

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myInput").value;
    document.getElementById("myH1").textContent = title + username
}