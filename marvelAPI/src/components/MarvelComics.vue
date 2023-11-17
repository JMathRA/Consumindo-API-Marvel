<template>
    <div>
      <h1>Personagens da Marvel</h1>
      <ul>
        <li v-for="character in characters" :key="character.id">
          {{ character.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import MarvelAPI from '../services/MarvelAPI';
  
  export default {
    data() {
      return {
        characters: [],
      };
    },
    mounted() {
      this.fetchCharacters();
    },
    methods: {
      async fetchCharacters() {
        try {
          const response = await MarvelAPI.getCharacters();
          this.characters = response.data.data.results;
        } catch (error) {
          console.error('Erro ao buscar personagens:', error);
        }
      },
    },
  };
  </script>