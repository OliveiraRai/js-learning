const PI = 3.141598;

// CONVENÇÃO
// Use UPPERCASE apenas para valores fixos antes do programa rodar

// Use camelCase/lowercase para valores calculados enquanto o 
// programa rodar, mesmo que seja 'const'

let radius;
let circumference;

document.getElementById("myButton").onclick = function(){
    radius = document.getElementById("myInput").value;
    circumference = PI * 2 * radius
    document.getElementById("myH2").textContent = circumference + "cm"
}