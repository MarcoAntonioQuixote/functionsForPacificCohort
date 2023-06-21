let pokemon = getPokeData();







//use for of and forEach to update pokemon species/rename, and update fainted;

//use a map method to iterate through pokemon array and return a new array; save to update pokemon, save for new array

//use filter to return array of pokemon that aren't fainted

//use reduce to return total HP points, or new pokedex object, or make a burger;

//use splice to delete a pokemon, and use splice to add a pokemon, try using pop, push, unshift, shift

//function greetEachOther, fightEachOther;


// let pokedex = pokemon.reduce((acc,poke) => {
//     return (
//         {...acc, [poke.name]: poke}
//     )
// },{});

// let totalHP = pokemon.reduce((acc,poke) => {
//     return (acc += poke.hp);
// },0);

// let ingredients = [
//     {food: 'meat', qty: 2},
//     {food: 'cheese', qty: 2},
//     {food: 'buns', qty: 2},
//     {food: 'lettuce', qty: 1},
//     {food: 'pickes', qty: 4},
// ]

// let burger = ingredients.reduce((acc,ingredient) => {
//     return ({
//         ...acc,
//         [ingredient.food] : ingredient.qty 
//     })
// },{});



// console.log(pokedex);
// console.log(totalHP);
// console.log(burger);

function getPokeData() {
    return [ //four different pokemon objects
        {
            name: 'Pikachu',
            hp: 25,
            fainted: false,
            type: 'electric',
            moves: [
                {name: 'tailwhip', power: 2, pp: 45},
                {name: 'thundershock', power: 12, pp: 15},
                {name: 'thunder', power: 100, pp: 1},
            ],
            faint: function () {
                alert(`${this.name} fainted!`);
            }
        },
        {
            name: 'Charmander',
            hp: 20,
            fainted: false,
            type: 'fire',
            moves: [
                {name: 'flamethrower', power: 35, pp: 4},
                {name: 'stomp', power: 20, pp: 10},
                {name: 'bite', power: 18, pp: 15},
                {name: 'tackle', power: 15, pp: 20},
            ],
            faint: function () {
                alert(`Charmander fainted!`);
            }
        },
        {
            name: 'Squirtle',
            hp: 36,
            fainted: true,
            type: 'water',
            moves: [
                {name: 'bubble', power: 12, pp: 40},
                {name: 'withdraw', power: 0, pp: 40},
                {name: 'watergun', power: 30, pp: 20},
                {name: 'hydropump', power: 100, pp: 5},
            ],
            faint: function () {
                alert(`Squirtle fainted!`);
            }
        },
        {
            name: 'Bulbasaur',
            hp: 27,
            fainted: false,
            type: 'grass',
            moves: [
                {name: 'razorleaf', power: 45, pp: 40},
                {name: 'tackle', power: 20, pp: 20},
                {name: 'solarbeam', power: 120, pp: 5},
            ],
            faint: function () {
                alert(`Bulbasaur fainted!`);
            }
        },

    ]
}