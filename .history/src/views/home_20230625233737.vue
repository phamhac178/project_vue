<template>
    <div class="flex flex-col p-8 ">
        <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="search for Means"/>
        <div class="flex justify-center gap-1">
            <router-link to="/" v-for="letter  of letters">
                {{ letter }}
            </router-link>
        </div>
    </div>
</template>
<script setup>
import { computed } from 'vue';
import store from "../store"

const meals = computed(()=> store.state.meals)
const letters ='ABCDEFGHIKJLMNOPQRSTUVWXYZ'.split("");
</script>