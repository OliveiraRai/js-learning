let x = "pizza"
let y;
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

// Ao converter uma variável não inicializada em String,
// seu valor retorna undefined e seu tipo agora é String.

// RESUMO

// Se uma variável não Number for convertida em Number, ela 
// retornará NaN sempre que o valor for letras ou vazia.

// Se uma variável não String for convertida em String, ela
// retornará undefined sempre que não tiver sido inicializada.

// Se uma variável não Boolean for convertida em Boolean, ela
// retornará true sempre que houver valor.
    // é retornado false para os seguintes valores:
