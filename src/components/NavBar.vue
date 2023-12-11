<template lang="">
  <div
    class="bg-blue-light text-white py-3.5 px-6 shadow md:flex justify-between"
  >
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex text-3xl items-center h-full px-2 font-bold hover:text-raspberry"
      >Home</router-link
    >

    <span
      @click="menuOpen"
      class="absolute md:hidden right-6 top-2.5 text-5xl cursor-pointer"
    >
      <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
    </span>

    <ul
      class="md:flex md:items-center md:px-0 px-10 md:pb-0 md:static left-0 absolute bg-blue-light md:w-auto w-full top-14 duration-700 ease-in"
      :class="[open ? 'left-0' : 'left-[-100%]']"
      @click="menuOpen"
    >
      <li class="md:mx-4 md:my-0 my-3">
        <router-link
          :to="{ name: 'byName' }"
          class="text-xl hover:text-blue-800"
          >Search</router-link
        >
      </li>
      <li class="md:mx-4 md:my-0 my-3">
        <router-link
          :to="{ name: 'byLetter' }"
          class="text-xl hover:text-blue-800"
          >Meals by letter</router-link
        >
      </li>
      <li class="md:mx-4 md:my-0 my-3">
        <router-link
          :to="{ name: 'ingredients' }"
          class="text-xl hover:text-blue-800"
          >Ingredients</router-link
        >
      </li>
      <li class="md:mx-4 md:my-0 my-3">
        <router-link
          :to="{ name: 'categories' }"
          class="text-xl hover:text-blue-800"
          >Categories</router-link
        >
      </li>
      <li class="md:mx-4 md:my-0 my-3">
        <router-link
          :to="{ name: 'byArea' }"
          class="text-xl hover:text-blue-800"
          >Areas</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const open = ref(false);

function menuOpen() {
  open.value = !open.value;
}
</script>
<style lang=""></style>
