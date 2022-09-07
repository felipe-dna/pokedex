<script setup lang="ts">
import {onBeforeMount, ref} from "vue";
import {loadPokemon} from "../services/api";

const pokemonList = ref()

onBeforeMount(async () => {
  pokemonList.value = await  loadPokemon()
})
</script>

<template>
  <div>
    <h1>Pokemon List</h1>

    <ul>
      <li v-for="pokemon in pokemonList" :key="pokemon.name">
        {{pokemon}}
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>
