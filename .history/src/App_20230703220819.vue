
<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <router-link :to="{name: 'home'}" class="inline-flex items-center h-full"> 
        Home
      </router-link>
      <div class="flex items-center gap-1">
        <router-link :to="al" class="px-2 inline-flex items-center transition-colors h-full hover:bg-purple-100 ">
          Search meal
        </router-link>
        <router-link :to="al" class="px-2 inline-flex items-center transition-colors h-full hover:bg-purple-100 ">
          Meal By Letter
        </router-link>
        <router-link :to="al" class="px-2 inline-flex items-center transition-colors h-full hover:bg-purple-100 ">
          Meal by intedients
        </router-link>
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
