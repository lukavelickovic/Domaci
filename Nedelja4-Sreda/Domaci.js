function Pokemon(name, type, abilities,characteristics){
    this.name = name;
    this.type = type;
    this.abilities = abilities;
    this.characteristics = characteristics;
}

let pokemon1 = new Pokemon('Pikacu','Electric',['Static electric, Speed'],['speed 55','Defence 47', 'Attack 53']);
let pokemon2 = new Pokemon ('Charmander', 'Fire',['Fire Control','Intelect'],['speed 50','Defence 44', 'Attack 54']);
let pokemon3 = new Pokemon ('Bulbasaur', 'Grass', ['Strenght','Force of Nature'],['speed 44','Defence 49', 'Attack 52']);
let pokemon4 = new Pokemon('Raichu','Electric', ['Hyper Electric power','Speed'],['speed 65','Defence 52', 'Attack 50']);
console.log(pokemon2.characteristics)