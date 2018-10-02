import { printToDom } from "../helpers/util.js";

const characters = [
    { id: 'character1', name: 'John Snow', house: 'Stark', imageUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553' },
    { id: 'character2', name: 'Daenerys Targaryen', house: 'Targaryen', imageUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/5/5f/Daenerys_Dragonpit.jpg/revision/latest?cb=20171015095128' },
    { id: 'character3', name: 'Cersei Lannister', house: 'Lannister', imageUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/c/c3/Profile-CerseiLannister.png/revision/latest?cb=20170828071355' },
    { id: 'character4', name: 'Tyrion Lannister', house: 'Lannister', imageUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/5/58/Tyrion_main_s7_e6.jpg/revision/latest?cb=20170818050344' }
];

const characterBuilders = () => {
    let domString = '';
    characters.forEach((character) => {
        domString += `<div class= "col-2 character">`
        domString +=    `<div class="card">`;   //this is in the bootstrap components card template
        domString +=    `<img class="card-img-top" src="${character.imageUrl}" alt="${character.name}">`;
        domString +=    `<div class="card-body">`;
        domString +=        `<h5 class="card-title">${character.name}</h5>`;
        domString +=      `</div>`;
        domString +=    `</div>`;
        domString += `</div>`;
        });
        printToDom(domString);
    };
    
export {characterBuilders};