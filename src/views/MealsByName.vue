<template lang="">
  <div class="p-6">
    <h1 class="text-4xl font-bold text-raspberry">Search meals by name</h1>
  </div>
  <div class="px-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 mb-6 w-full focus:border-blue-dark focus:ring-blue-dark transition-colors"
      placeholder="Search for meals"
      v-on:change="searchMeals"
    />
  </div>

  <Meals :meals="meals" />
</template>
<script setup>
import { onMounted, computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import Meals from '../components/Meals.vue';

const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch('searchMeals', keyword.value);
  } else {
    store.commit('setSearchedMeals', []);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
<style lang=""></style>
