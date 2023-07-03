
<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow h-16">
      <router-link :to="{name: 'home'}"> 
        Home
      </router-link>
      <div>
        <router-link>Search meal</router-link>
        <router-link>Meal by </router-link>
        <router-link>Search meal</router-link>
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
