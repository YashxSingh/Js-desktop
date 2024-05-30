const rand = Math.floor(Math.random()*100)+1;
const submit = document.querySelector('#submit');
const prev = document.querySelector('.prev');
const chances = document.querySelector('.remaining');
const guess = document.querySelector('#number');
const guesses = new Array();
let count = 0;

submit.addEventListener('click', () => {
    if (guess.value == rand && count < 10) {
        window.alert(`Excellent Work!!! \n You are a genius `);
        location.reload();
        document.querySelector('#number').value = '';
    } else if(!(count<10)) {
        window.alert(`No more attempts available. The correct number was ${rand}`);
        location.reload();
        document.querySelector('#number').value = '';
    }
    else {
        guesses.push(guess);
        prev.innerHTML = `${guesses.toString()}`;
        count++;
        chances.innerHTML = `${10-count}`;
    }
})