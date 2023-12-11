<template lang="">
  <div class="p-6">
    <h1 class="text-4xl font-bold text-raspberry">Categories</h1>
  </div>
  <div class="px-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 mb-6 w-full focus:border-blue-dark focus:ring-blue-dark transition-colors"
      placeholder="Search for categories"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <a
        href="#"
        @click.prevent="openCategory(category)"
        v-for="category of computedCategories"
        :key="category.idCategory"
        class="block bg-white rounded p-3 mb-3 shadow"
      >
        <h3 class="text-2xl font-bold mb-2">{{ category.strCategory }}</h3>
      </a>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import axiosClient from '../axiosClient';
import store from '../store';

const keyword = ref('');
const categories = ref([]);
const router = useRouter();

const computedCategories = computed(() => {
  if (!computedCategories) return categories;
  return categories.value.filter((i) =>
    i.strCategory.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

function openCategory(category) {
  store.commit('setCategory', category);
  router.push({
    name: 'byCategory',
    params: { category: category.strCategory },
  });
}

onMounted(() => {
  axiosClient.get('list.php?c=list').then(({ data }) => {
    categories.value = data.meals;
  });
});
</script>
<style lang=""></style>
