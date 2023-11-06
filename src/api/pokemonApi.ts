import { RESTDataSource } from '@apollo/datasource-rest';

export class PokemonAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://pokeapi.co/api/v2/pokemon';
    }

    async getPokemonList(limit, offset): Promise<ListPokemon> {
        return this.get<ListPokemon>(`?limit=${limit}&offset=${offset}`);
    }
    async getPokemon(name): Promise<MainPokemon> {
        return this.get<MainPokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`);
    }
}