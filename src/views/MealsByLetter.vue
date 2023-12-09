<template lang="">
  <div class="p-6">
    <h1 class="text-4xl font-bold mb-4 text-raspberry">Meals by letter</h1>
  </div>
  <div class="flex justify-center text-lg gap-3 px-8 pb-4">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      class="hover:scale-150 hover:text-blue-dark transition-colors"
    >
      {{ letter }}
    </router-link>
  </div>

  <Meals :meals="meals" />
</template>
<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import Meals from '../components/Meals.vue';

const route = useRoute();
const letters = 'ABCDRFGHIJKLMNOPQRSTUVWXYZ'.split('');
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch('searchMealsByLetter', route.params.letter);
});

onMounted(() => {
  store.dispatch('searchMealsByLetter', route.params.letter);
});
</script>
<style lang=""></style>
