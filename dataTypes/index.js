let x = "pizza"
let y = 90
let z = "pizza"

x = Number(x)
y = String(y)
z = Boolean(z)

document.getElementById("p1").textContent = `${x} ${typeof(x)}`
document.getElementById("p2").textContent = `${y} ${typeof(y)}`
document.getElementById("p3").textContent = `${z} ${typeof(z)}`

// Quando uma string é convertida em número, seu valor retorna
// NaN (Not a Numbber); embora o tipo seja 'number'.
    // Ou seja, Number() transforma a variável para o tipo Number
    // Mas é impossível converter caracteres em Number, então
    // retorna NaN. 
    // Se, dentro da string houvesse apenas números, Number()
    // funcionaria sem erros.

// Ao converter Number em String, ele retorna o número como 
// String e o tipo - como esperado - sendo 'string'
    // Ou seja, 90 (number) vira "90" (string)

// Ao converter String em Boolean, ele retorna o valor True
// apenas se a String tenha valor diferente de ""; e o tipo
// retorna 'boolean', como esperado.

