"use strict"

const user = prompt('Hello, friend what is your name?');
alert(`Welcome ${user}! It's nice to meet you.`);

let score = 0

document.querySelector("button").addEventListener("click", () => {
    //alert(`ouch, ${user}! that hurt`);

    let q1 = prompt('Is this website about Kelsee?');
    let q1low = q1.toLowerCase();
    
    if (q1low == 'yes' || q1low == 'y') {
        //console.log('Correct!');
        alert ('Congratulations! You can read.');
        score++;
    }
    else {
        //console.log('Inorrect!');
        alert ('Not you off to a rough start.');
    }

    let q2 = prompt('Is Kelsee from Taiwan?');
    let q2low = q2.toLowerCase();
      
    if (q2low == 'no' || q2low == 'n') {
        //console.log('Correct!');
        alert (`Okay! I see you, ${user}! You got it right.`);
        score++;
    }
    else {
        //console.log('Inorrect!');
        alert (`${user}, mane you know better. Incorrect!`);
    }

    let q3 = prompt('Does Kelsee hate music?');
    let q3low = q3.toLowerCase();
      
    if (q3low == 'no' || q3low == 'n') {
        //console.log('Correct!');
        alert ('Absolutely! Correct! Correct!');
        score++;
    }
    else {
        //console.log('Inorrect!');
        alert ('Booooo! *tomato* *tomato* Incorrect!');
    }

    let q4 = prompt('Is Kelsee in Code School?');
    let q4low = q4.toLowerCase();
      
    if (q4low == 'yes' || q4low == 'y') {
        //console.log('Correct!');
        alert ('Correct! Keep it up, mane.');
        score++;
    }
    else {
        //console.log('Inorrect!');
        alert ('Incorrect. You not even trying, mane.');
    }


    let q5 = prompt('Did Kelsee work for Reebok?');
    let q5low = q2.toLowerCase();
      
    if (q2low == 'no' || q2low == 'n') {
        //console.log('Correct!');
        alert (`Good job, ${user}! You're doing good.`);
        score++;
    }
    else {
        //console.log('Inorrect!');
        alert (`Honestly, ${user} I'm disappointed in you.`);
    }
    
    alert (`Preciate you, ${user}, you completed the quiz with a score of ${score} out of 5.`);

})