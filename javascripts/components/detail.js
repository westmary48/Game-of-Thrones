import {printToDom} from '../helpers/util.js';
import {characterBuilders} from './characters.js';

const closeButtonEvent = () => {
    const closeButton = document.getElementById('closeButton');
    closeButton.addEventListener('click', characterBuilders)
};

const detailsBuilder = (character) => {
    let domString = '';
    domString += `<div class= " col-6 offest-md-3">`;
    domString += `<div class= "row">`;
    domString += `<button class ="btn btn-danger" id"closeButton">X</button>`;
    domString += `</div>`;
    domString += `<div class= "row">`;
    domString += `<div class = "col">`;
    domString += `<img src= "${character.imageUrl}"/>`;
    domString += `</div>`;
    domString += `<div class = "col">`;
    domString += `<h1>${character.name}</h1>`;
    domString += `<h3>${character.house}</h3>`;
    domString += `</div>`;
    domString += `</div`;
    domString += `</div>`;

    printToDom(domString);
    closeButtonEvent();

};

export{detailsBuilder};