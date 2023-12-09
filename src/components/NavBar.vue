<template lang="">
  <header
    class="bg-blue-light text-white shadow-lg h-16 flex justify-between items-stretch"
  >
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex text-2xl items-center h-full px-8 font-bold hover:text-raspberry"
      >Home</router-link
    >
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full hover:bg-blue-dark"
        >Search Meals</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full hover:bg-blue-dark"
        >Meals By Letter</router-link
      >
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center px-2 h-full hover:bg-blue-dark"
        >Meals By Ingredients</router-link
      >
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style lang=""></style>
