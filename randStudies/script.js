const button = document.getElementById("myButton");
const display = document.getElementById("myDisplay");

dices = ["⚀","⚁","⚂","⚃","⚄","⚅"]

button.addEventListener('click', () => {
    let diceValue = Math.floor(Math.random() * 6) ;
    dice = dices[diceValue];
    display.textContent = dice;
});