<template>
  <a class="group">
    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
      <img :src="data?.sprites?.front_default" class="h-full w-full object-cover object-center group-hover:opacity-75" />
    </div>
    <h3 class="mt-4 text-sm text-gray-700">{{ data?.id }}</h3>
    <p class="mt-1 text-lg font-medium text-gray-900">{{ data?.name }}</p>
  </a>
</template>

<script lang="ts" setup>
import {onBeforeMount, ref} from "vue";
import {getPokemonData} from "../services/api";

const props = defineProps<{ url: string }>()

const data = ref()

onBeforeMount(async () => {
  data.value = await getPokemonData(props.url)
})
</script>