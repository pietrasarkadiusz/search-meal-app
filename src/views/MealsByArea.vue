<template lang="">
  <div class="p-6">
    <h1 class="text-4xl font-bold mb-4 text-raspberry">Meals by area</h1>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-5 gap-3 px-8 pb-8">
    <div v-for="area of areas" :key="area.strArea">
      <div class="bg-white shadow rounded-md hover:scale-105 transition-all">
        <router-link
          :to="{ name: 'byArea', params: { area: area.strArea } }"
          class="hover:scale-150 hover:text-blue-dark transition-colors"
        >
          <div class="p-3">
            <h3 class="font-bold">{{ area.strArea }}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <Meals :meals="meals" />
</template>
<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import Meals from '../components/Meals.vue';
import axiosClient from '../axiosClient';

const route = useRoute();
const areas = ref([]);
const meals = computed(() => store.state.mealsByArea);

watch(route, () => {
  store.dispatch('searchMealsByArea', route.params.area);
});

onMounted(() => {
  axiosClient.get('list.php?a=list').then(({ data }) => {
    areas.value = data.meals;
  });
  store.dispatch('searchMealsByArea', route.params.area);
});
</script>
<style lang=""></style>
