<template lang="">
  <div class="text-center mx-auto p-6">
    <h1 class="text-5xl font-bold mb-5 text-raspberry">{{ meal.strMeal }}</h1>
  </div>
  <div class="items-center max-w-[700px] mx-auto">
    <img :src="meal.strMealThumb" :alt="meal.stMeal" class="" />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category: </strong>{{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area: </strong>{{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags: </strong>{{ meal.strTags }}</div>
    </div>

    <div class="my-3">
      {{ meal.strInstructions }}
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="flex w-[700px] mt-6 justify-between">
        <YoutubeButton>Go to YouTube</YoutubeButton>
        <a
          :href="meal.strSource"
          target="_blank"
          class="px-3 py-2 rounded border-none"
        >
          View Original Source
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YoutubeButton from '../components/YoutubeButton.vue';

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>
<style></style>
