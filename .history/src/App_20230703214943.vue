
<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow h-16 flex justify-between items-center">
      <router-link :to="{name: 'home'}"> 
        Home
      </router-link>
      <div>
        <router-link to="/" class="px-2">Search meal</router-link>
        <router-link to="/" class="px-2">Meal By Letter</router-link>
        <router-link to="/" class="px-2">Meal by intedients</router-link>
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
