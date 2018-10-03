import { printToDom } from "../helpers/util.js";
import {detailsBuilder} from "./detail.js";

let characters = [];

const setCharacters = (newArray) => {
    characters = newArray;
};

const getCharacterz = () => {
    return characters;
};

const characterClick = (e) => {  //this one was third
    const characterId = e.target.closest('.character-card').id  //closet starts with what you started with and then goes up the DOM chain- this says who cares where you click, it will still show everything
    const currentCharacter = characters.find(x => x.id === characterId)  //find is looping of the character ID and finding which character I clicked on
    detailsBuilder(currentCharacter);
};

const createEvents = () => {  // then this one
    const characterCards = document.getElementsByClassName('character-card')
    for(let i=0; i<characterCards.length; i++){
        characterCards[i].addEventListener('click', characterClick);
    }
};


const sortPeople = (e) => {
    const house = e.target.id;
    if( house == 'All') {
        characterBuilders(characters);
    } else {
    const filteredPeeps = characters.filter(x => x.house === house);
    characterBuilders(filteredPeeps);
    console.log('you hit sort'. e.target.id);
}
};

const sortEvents = () => {
    const allButton = document.getElementById('All');
    const starkButton = document.getElementById('Stark');
    allButton.addEventListener('click', sortPeople);
    starkButton.addEventListener('click', sortPeople);

};

const characterBuilders = (charactersArray) => {  //made this function first
    let domString = '';
    charactersArray.forEach((character) => {
        domString += `<div class= "col-2 character-card" id="${character.id}">`
        domString +=    `<div class="card">`;   //this is in the bootstrap components card template
        domString +=    `<img class="card-img-top" src="${character.imageUrl}" alt="${character.name}">`;
        domString +=    `<div class="card-body">`;
        domString +=        `<h5 class="card-title">${character.name}</h5>`;
        domString +=      `</div>`;
        domString +=    `</div>`;
        domString += `</div>`;
        });
        printToDom(domString);
        createEvents();
    };
    
export {characterBuilders, setCharacters, getCharacterz, sortEvents};