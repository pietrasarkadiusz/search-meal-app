<template lang="">
  <div class="p-6">
    <h1 class="text-4xl font-bold text-raspberry">Ingredients</h1>
  </div>
  <div class="px-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 mb-6 w-full focus:border-blue-dark focus:ring-blue-dark transition-colors"
      placeholder="Search for ingredients"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <a
        href="#"
        @click.prevent="openIngredient(ingredient)"
        v-for="ingredient of computedIngredients"
        :key="ingredient.idIngredient"
        class="block bg-white rounded p-3 mb-3 shadow"
      >
        <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      </a>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import store from '../store';
import axiosClient from '../axiosClient';

const keyword = ref('');
const ingredients = ref([]);
const router = useRouter();

const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

function openIngredient(ingredient) {
  store.commit('setIngredient', ingredient);
  router.push({
    name: 'byIngredient',
    params: { ingredient: ingredient.strIngredient },
  });
}

onMounted(() => {
  axiosClient.get('list.php?i=list').then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
<style lang=""></style>
