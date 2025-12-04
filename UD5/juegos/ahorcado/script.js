const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

const categories = [
    {
        name: 'Cities',
        words: [
            { word: 'madrid', hint: 'Capital of Spain' },
            { word: 'paris', hint: 'City of Light' },
            { word: 'london', hint: 'Home of Big Ben' },
            { word: 'tokyo', hint: 'Capital of Japan' },
            { word: 'rome', hint: 'The Eternal City' }
        ]
    },
    {
        name: 'Animals',
        words: [
            { word: 'elephant', hint: 'Has a trunk' },
            { word: 'lion', hint: 'King of the jungle' },
            { word: 'giraffe', hint: 'Long neck' },
            { word: 'penguin', hint: 'Flightless bird' },
            { word: 'dolphin', hint: 'Intelligent sea mammal' }
        ]
    },
    {
        name: 'Movies',
        words: [
            { word: 'gladiator', hint: 'Are you not entertained?' },
            { word: 'titanic', hint: 'A big ship sinks' },
            { word: 'avatar', hint: 'Blue people' },
            { word: 'jaws', hint: 'Scary shark' },
            { word: 'matrix', hint: 'Red pill or blue pill' }
        ]
    }
];

let chosenCategory;
let chosenWordObj;
let guesses = [];
let lives = 10;
let counter = 0;
let space = 0;

const showLives = document.getElementById("mylives");
const showCategory = document.getElementById("categoryName");
const showClue = document.getElementById("clue");
const wordHolder = document.getElementById("hold");
const buttonsContainer = document.getElementById("buttons");
const hintButton = document.getElementById("hint");
const resetButton = document.getElementById("reset");

function createButtons() {
    buttonsContainer.innerHTML = '';
    for (let i = 0; i < alphabet.length; i++) {
        let btn = document.createElement('button');
        btn.id = alphabet[i];
        btn.innerHTML = alphabet[i];
        btn.className = 'alphabet-btn';
        btn.onclick = function () {
            check(this.innerHTML);
            this.setAttribute("disabled", "true");
        }
        buttonsContainer.appendChild(btn);
    }
}

function selectWord() {
    const catIndex = Math.floor(Math.random() * categories.length);
    chosenCategory = categories[catIndex];
    const wordIndex = Math.floor(Math.random() * chosenCategory.words.length);
    chosenWordObj = chosenCategory.words[wordIndex];

    console.log(chosenWordObj.word);
}

function result() {
    wordHolder.innerHTML = '';
    guesses = [];
    counter = 0;
    space = 0;

    const word = chosenWordObj.word;

    for (let i = 0; i < word.length; i++) {
        let guess = document.createElement('span');
        if (word[i] === '-') {
            guess.innerHTML = "-";
            space = 1;
        } else {
            guess.innerHTML = "_";
        }
        guesses.push(guess);
        wordHolder.appendChild(guess);
    }
}

function comments() {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
        showLives.innerHTML = "Game Over";
        disableAllButtons();
    }

    let correctLetters = 0;
    for (let i = 0; i < guesses.length; i++) {
        if (guesses[i].innerHTML !== "_") {
            correctLetters++;
        }
    }
    if (correctLetters === guesses.length) {
        showLives.innerHTML = "You Win!";
        disableAllButtons();
    }
}

function disableAllButtons() {
    const btns = document.querySelectorAll('.alphabet-btn');
    btns.forEach(btn => btn.setAttribute("disabled", "true"));
}

function check(letter) {
    const word = chosenWordObj.word;
    let found = false;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            guesses[i].innerHTML = letter;
            counter += 1;
            found = true;
        }
    }

    if (!found) {
        lives -= 1;
    }

    comments();
}

function play() {
    lives = 10;
    showClue.innerHTML = "";

    selectWord();
    showCategory.innerHTML = "The Chosen Category Is " + chosenCategory.name;

    createButtons();
    result();
    comments();
}

hintButton.onclick = function () {
    showClue.innerHTML = "Clue: - " + chosenWordObj.hint;
};

resetButton.onclick = function () {
    play();
}

window.onload = function () {
    play();
}
