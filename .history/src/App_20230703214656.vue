
<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow h-16">
      <router-link :to="{name: 'home'}"> 
        Home
      </router-link>
      <div>
        <router-link to="/">Search meal</router-link>
        <router-link to="/">Meal By Letter</router-link>
        <router-link to="/">Meal by intedients</router-link>
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
