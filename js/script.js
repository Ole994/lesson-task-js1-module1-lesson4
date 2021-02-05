const sports = ["golf", "football", "cricket"];

const games = [
    {
        name: "Starcraft 2",
        released: "2010",        
    },
    {
        name: "Age of Empires II",       
    },
    {
        name: "Cyberpunk 2077",
        released: 2020
    }
];

//Q1
function printSeason (season) {
    console.log (season);
}
printSeason ("summer");

//Q2

function printNumbers (firstNumber, secoundNumber){
    console.log ("First" + firstNumber, "secound" + secoundNumber)
}
printNumbers (10, 14);

//Q3
function addNumbers (firstNumber, secoundNumber, thirdNumber){
    const result = firstNumber + secoundNumber + thirdNumber;
    return result;
}

const total = addNumbers (5, 10, 15);
const totalContainer = document.querySelector (".total");
totalContainer.innerHTML = total;

//Q4
function createGreeting (name){
    const greeting = "Hello, my name is" + name +".";
    return greeting;
}

const greeting = ("Serral");

const nameContainer = document.querySelector ("#name");
nameContainer.innerHTML = greeting;


//Q5
function printListItems (list){
    for (let i=0; i<list.length; i++) {
        console.log (list[i]);
    }
}
printListItems (sports);



//Q6

function createGames(gamesList) {

    let html = "";

    for(let i = 0; i < gamesList.length; i++) {

        let releaseYear = "Unknown year";

        if(gamesList[i].released) {
            releaseYear = gamesList[i].released;
        }

        html += `<div class="game">
                    <h5>${gamesList[i].name}</h5>
                    <p>Released: ${releaseYear}</p>
                </div>`;
    }

    return html;
}

const newHTML = createGames(games);

const gameContainer = document.querySelector(".game-container");
gameContainer.innerHTML = newHTML;

