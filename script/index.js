// function play() {
//     // step-1 hide the home screen. To hide the screen add the class hidden to the home section.
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')
//     // show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
//     // console.log(playGroundSection.classList)

// }
function handleKeyboardKeyupButton(event) {
    // console.log('button press')
    const playerPressed = event.key;
    console.log('player pressed', playerPressed)

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check matched or not
    if (playerPressed === expectedAlphabet) {
        // console.log('You get a point');

        const currentScore = getElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore)
        //-------------------------------------------------------
        // const currentScoreElement = document.getElementById('current-score')
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText)

        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }
    else {
        const currentLife = getElementValueById('current-life')
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife)

        if (updatedLife === 0) {
            gameOver();
        }

        //------------------------------------------
        // console.log('You missed. You lost a life');
        //     const currentLifeElement = document.getElementById('current-life');
        //     const currentLifeText = currentLifeElement.innerText;
        //     const currentLife = parseInt(currentLifeText)

        //     const newLife = currentLife - 1;
        //     currentLifeElement.innerText = newLife;
    }

}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyupButton)

function continueGame() {
    // 1st step : generate a random alphabet
    const alphabet = getARandomAlphabet();

    //set randomly generate alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet);
}


function play() {
    //hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    //reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);


    continueGame('');
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

}

