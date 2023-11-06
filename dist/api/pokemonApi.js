import { RESTDataSource } from '@apollo/datasource-rest';
export class PokemonAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://pokeapi.co/api/v2/pokemon';
    }
    async getPokemonList(limit, offset) {
        return this.get(`?limit=${limit}&offset=${offset}`);
    }
    async getPokemon(name) {
        return this.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    }
}
