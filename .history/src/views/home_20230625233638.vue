<template>
    <div class="flex flex-col p-8 items-center justify-center">
        div
        <div class="flex gap-1">
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