
<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <router-link :to="{name: 'home'}"> 
        Home
      </router-link>
      <div>
        <router-link to="/" class="px-2 inline-block h-full hover:bg-purple-200">Search meal</router-link>
        <router-link to="/" class="px-2 inline-block h-full hover:bg-purple-200">
          Meal By Letter
        </router-link>
        <router-link to="/" class="px-2 inline-block h-full hover:bg-purple-200">Meal by intedients</router-link>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
