<template>
        <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <router-link :to="{name: 'home'}" class="inline-flex items-center h-full"> 
        Home
    </router-link>
    <div class="flex items-center gap-1">
        <router-link :to="{name: 'byName'}" class="px-2 inline-flex items-center transition-colors h-full hover:bg-purple-100 ">
            Search meal
        </router-link>
        <router-link :to="{name: 'byLetter'}" class="px-2 inline-flex items-center transition-colors h-full hover:bg-purple-100 ">
            Meal By Letter
        </router-link>
        <router-link :to="{name: 'byIngredient'}" class="px-2 inline-flex items-center transition-colors h-full hover:bg-purple-100 ">
            Meal by intedients
        </router-link>
      </div>
    </header>
</template>