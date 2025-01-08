function getAlphabet ()
{    const RandomAlphabet =  generateRandomAlphabet();
    const displayAlphabet = document.getElementById('display-alpha');
    displayAlphabet.innerText = RandomAlphabet;
    setBgColor(RandomAlphabet);
}
function play ()
{
    removeElementById('home-screen');
    removeElementById ('score')
    getElementById('play-ground');
    getAlphabet(); 
    // set life and score its for play again
    eventValue ('current-life', 5);
    eventValue ('current-score', 0);
}
// get Keys From Keyboard
document.addEventListener('keyup',getPressedAlphabet)
function getPressedAlphabet (event)
{
    const pressedAlphabet = event.key;
    // game over
    if(pressedAlphabet === 'Escape')
    {
        getScoreSection();
        const currentAlphabet = getElementTextById ('display-alpha');
        removeBgColor(currentAlphabet);
    }
    const getShowAlphabets = document.getElementById('display-alpha');
    const showAlphabet = getShowAlphabets.innerText;
    const getLowerShowAlphabet = showAlphabet.toLowerCase();
    
    if(getLowerShowAlphabet === pressedAlphabet)
    {
        const setFinalScore = eventCalculation ('current-score') + 1;
        eventValue ('current-score', setFinalScore)
        removePreviousAlphaBGAndSetNew ();
    }
    else
    {
       const setFinalScore = eventCalculation ('current-life') - 1;
        eventValue ('current-life', setFinalScore);
        removePreviousAlphaBGAndSetNew ();

        if(setFinalScore === 0)
        {
            getScoreSection();
        }
    }
}
function getScoreSection()
{
    removeElementById('play-ground');
    getElementById ('score');

    const point =  eventCalculation('current-score');
    eventValue ('final-score', point)

    const currentAlphabet = getElementTextById ('display-alpha');
    removeBgColor(currentAlphabet);
}
