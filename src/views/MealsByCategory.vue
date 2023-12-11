<template lang="">
  <div class="p-6">
    <h1 class="text-4xl font-bold text-raspberry">
      Meals for {{ category.strCategory }}
    </h1>
  </div>
  <Meals :meals="meals" />
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import Meals from '../components/Meals.vue';

const route = useRoute();
const category = computed(() => store.state.category);
const meals = computed(() => store.state.mealsByCategory);

onMounted(() => {
  store.dispatch('searchMealsByCategory', route.params.category);
});
</script>
<style lang=""></style>
