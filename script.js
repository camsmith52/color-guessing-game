// selecting butttons
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('mode').addEventListener('click', mode);
document.getElementById("mode-selected").addEventListener('click', modeSelected);

//selects clickable squares - when selected here by class they get put into an array so you have to loop thru the array and do what you want with each one
let squareButton = document.getElementsByClassName("square")

for (var i = 0; i < squareButton.length; i++) {
    squareButton[i].addEventListener('click', square);
}

let switchTrueOrFalse = false
let randomArrayToChooseAnswer;
let answer;

function reset() {
    document.getElementById('reset').innerText = 'NEW COLORS'
    document.getElementById('message').innerText = ''
    document.getElementById("h1").style.backgroundColor = "#2C8E99"

    if (switchTrueOrFalse== true){
        let randomRed = Math.floor(Math.random() * 256)
        let randomGreen = Math.floor(Math.random() * 256)
        let randomBlue = Math.floor(Math.random() * 256)
        let square1Array = [randomRed, randomGreen, randomBlue]
        let [a, b, c] = square1Array
        document.getElementById("square1").style.backgroundColor = `rgb(${a}, ${b}, ${c})`
        let randomRed2 = Math.floor(Math.random() * 256)
        let randomGreen2 = Math.floor(Math.random() * 256)
        let randomBlue2 = Math.floor(Math.random() * 256)
        let square2Array = [randomRed2, randomGreen2, randomBlue2]
        let [d, e, f] = square2Array
        document.getElementById("square2").style.backgroundColor = `rgb(${d}, ${e}, ${f})`
        let randomRed3 = Math.floor(Math.random() * 256)
        let randomGreen3 = Math.floor(Math.random() * 256)
        let randomBlue3 = Math.floor(Math.random() * 256)
        let square3Array = [randomRed3, randomGreen3, randomBlue3]
        let [g, h, i] = square3Array
        document.getElementById("square3").style.backgroundColor = `rgb(${g}, ${h}, ${i})`

        let randomArrayToChooseAnswer = [square1Array, square2Array, square3Array]
        let randomNumberForAnswer = Math.floor(Math.random() * (randomArrayToChooseAnswer.length))
        answer = randomArrayToChooseAnswer[randomNumberForAnswer] // choosing a random color as the answer
        document.getElementById('color-rgb').innerText = `${answer}`
    }

    else{
    let randomRed = Math.floor(Math.random()* 256)
    let randomGreen = Math.floor(Math.random()* 256)
    let randomBlue = Math.floor(Math.random()* 256)
    let square1Array = [randomRed, randomGreen, randomBlue]
    let [a, b, c] = square1Array
    document.getElementById("square1").style.backgroundColor = `rgb(${a}, ${b}, ${c})`
    let randomRed2 = Math.floor(Math.random() * 256)
    let randomGreen2 = Math.floor(Math.random() * 256)
    let randomBlue2 = Math.floor(Math.random() * 256)
    let square2Array = [randomRed2, randomGreen2, randomBlue2]
    let [d, e, f] = square2Array
    document.getElementById("square2").style.backgroundColor = `rgb(${d}, ${e}, ${f})`
    let randomRed3 = Math.floor(Math.random() * 256)
    let randomGreen3 = Math.floor(Math.random() * 256)
    let randomBlue3 = Math.floor(Math.random() * 256)
    let square3Array = [randomRed3, randomGreen3, randomBlue3]
    let [g, h, i] = square3Array
    document.getElementById("square3").style.backgroundColor = `rgb(${g}, ${h}, ${i})`
    let randomRed4 = Math.floor(Math.random() * 256)
    let randomGreen4 = Math.floor(Math.random() * 256)
    let randomBlue4 = Math.floor(Math.random() * 256)
    let square4Array = [randomRed4, randomGreen4, randomBlue4]
    let [j, k, l] = square4Array
    document.getElementById("square4").style.backgroundColor = `rgb(${j}, ${k}, ${l})`
    let randomRed5 = Math.floor(Math.random() * 256)
    let randomGreen5 = Math.floor(Math.random() * 256)
    let randomBlue5 = Math.floor(Math.random() * 256)
    let square5Array = [randomRed5, randomGreen5, randomBlue5]
    let [m, n, o] = square5Array
    document.getElementById("square5").style.backgroundColor = `rgb(${m}, ${n}, ${o})`
    let randomRed6 = Math.floor(Math.random() * 256)
    let randomGreen6 = Math.floor(Math.random() * 256)
    let randomBlue6 = Math.floor(Math.random() * 256)
    let square6Array = [randomRed6, randomGreen6, randomBlue6]
    let [p, q, r] = square6Array
    document.getElementById("square6").style.backgroundColor = `rgb(${p}, ${q}, ${r})`

    let randomArrayToChooseAnswer = [square1Array, square2Array, square3Array, square4Array, square5Array, square6Array]
    let randomNumberForAnswer = Math.floor(Math.random() * (randomArrayToChooseAnswer.length))
    answer = randomArrayToChooseAnswer[randomNumberForAnswer] // choosing a random color as the answer
    document.getElementById('color-rgb').innerText = `${answer}`
}}

// Easy mode takes away squares 4,5 and 6 and resets everything
function mode(){
    switchTrueOrFalse = true
    document.getElementById('square4').style.display = "none"
    document.getElementById('square5').style.display = "none"
    document.getElementById('square6').style.display = "none"
    reset()
}

// Hard mode puts back squares 4,5 and 6 and resets everything
function modeSelected() {
    
    document.getElementById('square4').style.display  = "block"
    document.getElementById('square5').style.display  = "block"
    document.getElementById('square6').style.display  = "block"
    reset()
}
//Checks to see if the answer is correct
function square() {
    let [p, q, r] = answer //destructures the answer into p,q and r variables
    if(this.style.backgroundColor == `rgb(${p}, ${q}, ${r})`)  //spacing has to be the same!
    {document.getElementById('message').innerText = 'Correct' 
    document.getElementById('reset').innerText = 'Play again' 
        for (var i = 0; i < squareButton.length; i++) {
            squareButton[i].style.backgroundColor = `rgb(${p}, ${q}, ${r})` //again, have to loop through each square to change its color upon correct answer
        }
        document.getElementById("h1").style.backgroundColor = `rgb(${p}, ${q}, ${r})`
}  
    else{
        const arrayOfMessages = ['Try again','Not that one', 'Incorrect','Keep trying']
        const randomNumberForMessage = Math.floor(Math.random()* arrayOfMessages.length) //generates a random message
        document.getElementById('message').innerText = `${arrayOfMessages[randomNumberForMessage]}`
    }
    
}

//Switches to easy mode (which also resets) on load
window.addEventListener("load", modeSelected);