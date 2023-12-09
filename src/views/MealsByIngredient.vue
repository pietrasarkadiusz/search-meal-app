<template lang="">
  <div class="p-6">
    <h1 class="text-4xl font-bold text-raspberry">
      Meals for {{ ingredient.strIngredient }}
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
const ingredient = computed(() => store.state.ingredient);
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient);
});
</script>
<style lang=""></style>
