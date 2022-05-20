import { ajax } from 'rxjs/ajax';

export const getPokemon = (name) => { 
    const { results: allPokemon } = ajax.getJSON("https://pokeapi.co/api/v2/pokemon/?limit=1000").subscribe(console.log);
    return allPokemon.filter(pokemon => pokemon.name.includes(name))
 }