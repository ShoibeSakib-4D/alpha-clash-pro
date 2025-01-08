function removeElementById (elementId)
{
    const removeElement =document.getElementById(elementId)
    removeElement.classList.add('hidden')
}
function getElementById (elementId)
{
    const getElement = document.getElementById(elementId)
    getElement.classList.remove('hidden');
}
function setBgColor(alpahbets)
{
   const alphabet = document.getElementById(alpahbets);
   alphabet.classList.add('bg-orange-600');
}
function removeBgColor(alpahbet)
{
    const alphabet = document.getElementById(alpahbet);
   alphabet.classList.remove('bg-orange-600');
}

function getElementTextById (eventId)
{
    const element = document.getElementById(eventId);
    const text = element.innerText;
    return text;
}

function eventCalculation (eventId)
{
    const currentElement = document.getElementById(eventId);
    const current = currentElement.innerText;
    const final = parseInt(current);
    return final;
}

function eventValue (eventId, elementValue)
{
     const getEventId = document.getElementById(eventId);
    getEventId.innerText = elementValue;
}
function getOnlyAlphabetById (eventId)
{
    const onlyAlphabet = document.getElementById(eventId);
    const alphabet = onlyAlphabet.innerText;
    return alphabet;
}
// removePreviousAlphaBGAndSetNew
function removePreviousAlphaBGAndSetNew ()
{
    const getShowAlphabets = document.getElementById('display-alpha');
    const showAlphabet = getShowAlphabets.innerText;
    
    const getLowerShowAlphabet = showAlphabet.toLowerCase();

        removeBgColor(getLowerShowAlphabet);
        getAlphabet();
}
// get random laphabet by random index
function generateRandomAlphabet ()
{
//  get an array of alpahbets
const alpahbets = 'abcdefghijklmnopqrstuvwxyz';
const getAAlphabetInArray = alpahbets.split('');
const generateRandomNumber = Math.random()*25;
 const roundRandomNumber = Math.round(generateRandomNumber);
 const alpahbet = getAAlphabetInArray[roundRandomNumber];
return alpahbet;
 }

 
