const marvel_heroes = ["thor", "Captain America", "Black Widow"]
const dc_superheroes = ["Batman", "Flash", "Superman"]

//marvel_heroes.push(dc_superheroes)

const all_heroes = marvel_heroes.concat(dc_superheroes)

console.log(all_heroes)
console.log(marvel_heroes[3])

const all_new_heoroes=[...dc_superheroes,...marvel_heroes]
console.log(all_new_heoroes)

const another_array= [1,23,4,[23,4,5,6],[45,46,2]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Animesh"))
console.log(Array.from("Animesh"))
console.log(Array.from({name:"Animesh"}))

let score1 = 100
let score2 = 100
let score3 = 100

console.log(Array.of(score1, score2, score3));

