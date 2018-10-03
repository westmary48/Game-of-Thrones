import{setCharacters, characterBuilders, getCharacterz} from '../components/characters.js';

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setCharacters(data.characters);
    characterBuilders(getCharacterz());
}

function executeThisCodeIfXHRFails () {
    console.log('shit broke');
}

const getCharacters = () => {  // change function
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', executeThisCodeIfXHRFails);
    myRequest.open('GET', './db/characters.json'); // change this
    myRequest.send();
};

export{getCharacters};