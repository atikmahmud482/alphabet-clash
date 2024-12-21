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
        console.log('You get a point');
        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }
    else {
        console.log('You missed. You lost a life');
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
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame('')
}

