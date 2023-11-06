import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs as Pokemon } from './schemas/pokemon.js';
import { typeDefs as Book } from './schemas/book.js';
import { PokemonAPI } from './api/pokemonApi.js';
import { makeExecutableSchema } from 'graphql-tools';

let books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    books: () => {
      books.push({
        title: 'Banco Estado',
        author: 'Adquerencia',
      });
      return books;
    },
    pokemonList: async (parent, { limit, offset }) => {
      console.log(limit);
      return await pokemonAPI.getPokemonList(limit, offset);
    },
    pokemon: async (parent, { name }) => await pokemonAPI.getPokemon(name),
    pokemonFull: async () => {
      let listaPokemon = await pokemonAPI.getPokemonList(10, 0);
      let listRes = [];

      console.log(listaPokemon);
      const { results } = listaPokemon;

      results.forEach(async pokemon => {
        let res = await pokemonAPI.getPokemon(pokemon.name);
        listRes.push(res);
      });

      return listRes;
    },
  },
}

const pokemonAPI = new PokemonAPI;

const schema = makeExecutableSchema({
  typeDefs: [Book, Pokemon],
  resolvers,
})

const server = new ApolloServer({ schema });

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);

