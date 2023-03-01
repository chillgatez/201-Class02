"use strict"

const user = prompt('Hello, friend what is your name?');
alert(`Welcome ${user}! It's nice to meet you.`);

let score = 0;

//lab1 quiz function
document.querySelector("button").addEventListener("click", () => {
    

    let q1 = prompt('Is this website about Kelsee?');
    let q1low = q1.toLowerCase();

    if (q1low == 'yes' || q1low == 'y') {
        //console.log('Correct!');
        alert('Congratulations! You can read.');
        score++;

    } else {
        //console.log('Inorrect!');
        alert('Not you off to a rough start.');
    }

    let q2 = prompt('Is Kelsee from Taiwan?');
    let q2low = q2.toLowerCase();

    if (q2low == 'no' || q2low == 'n') {
        //console.log('Correct!');
        alert(`Okay! I see you, ${user}! You got it right.`);
        score++;

    } else {
        //console.log('Inorrect!');
        alert(`${user}, mane you know better. Incorrect!`);
    }

    let q3 = prompt('Does Kelsee hate music?');
    let q3low = q3.toLowerCase();

    if (q3low == 'no' || q3low == 'n') {
        //console.log('Correct!');
        alert('Absolutely! Correct! Correct!');
        score++;

    } else {
        //console.log('Inorrect!');
        alert('Booooo! *tomato* *tomato* Incorrect!');
    }

    let q4 = prompt('Is Kelsee in Code School?');
    let q4low = q4.toLowerCase();

    if (q4low == 'yes' || q4low == 'y') {
        //console.log('Correct!');
        alert('Correct! Keep it up, mane.');
        score++;

    } else {
        //console.log('Inorrect!');
        alert('Incorrect. You not even trying, mane.');
    }


    let q5 = prompt('Did Kelsee work for Reebok?');
    let q5low = q2.toLowerCase();

    if (q5low == 'no' || q5low == 'n') {
        //console.log('Correct!');
        alert(`Good job, ${user}! You're doing good.`);
        score++;

    } else {
        //console.log('Inorrect!');
        alert(`Honestly, ${user} I'm disappointed in you.`);

    }

    
    let ansArr = [
        "Mama's Gun", 
        "The Jungle is the Only way Out", 
        "The Gold Experience", 
        "Love Wars",
        "Beyonce", 
        "Blonde",
        "Diana Ross", 
        "After Laughter", 
        "Tranquility Base Hotel and Casino", 
        "1989"
    ];
    let uaArr = [];
    for (let i = 0; i < 6; i++){
        uaArr.push(prompt("Can you name 1 of my top 10 albums?"));
    }

    let correct = false;

    for(i = 0; i < uaArr.length; i++){
        if(ua[i] == null)
            alert ("enter an album, mane")
        for (let j=0; j < ansArr.length; j++){
            if (uaArr[i] == ansArr[j]){
                correct = true;
                score++
                alert (`You got it! Here are all of the possible answers: ${ansArr} `)
                break;
            } else if (ua[i]!== ansArr[j]){
                correct = false;
                alert (`you didn't get it.`)
            }
        }
    }
});


let randomNumber = Math.floor(Math.random() * 30) + 1;
//declares random number
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
guessField.focus()

function checkGuess() {
    const userGuess = Number(guessField.value);

    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += `${userGuess}`;

    if (userGuess === randomNumber) {
        score++
        lastResult.textContent = `Ayyyye! One point for ${user}! Go ahead and check your email for an evite to my album release party!`;
        lowOrHi.textContent = '';
        setGameOver();

    } else if (guessCount === 4) {
        lastResult.textContent = `Hate to break it to ya ${user}, you have earned ZERO points and you wont be getting a private link to my new album.`;
        lowOrHi.textContent = '';
        setGameOver();

    } else {
        lastResult.textContent = 'Nah dawg. That aint it.';

        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'too low';

        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'too high';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

//reset button generator
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Run it back!';
    document.getElementById("guess").append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

//clears reset paragraphs
function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultsParas p');
    //console.log(reset)
    for (const resetPara of resetParas) {
        resetPara.textContent ='';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    randomNumber = Math.floor(Math.random() * 100) + 1;

}

//array - array = [43, 986, 453341, 54, 076832]
//prompt
//for loop
//for(i = 0; i < Array.length; i++){
//   if(userAns = array[x]){

//    }
    
//}


