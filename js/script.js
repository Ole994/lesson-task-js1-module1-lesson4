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
