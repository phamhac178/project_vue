<template>
    <input type="text" class="rouded border-2">
</template>
<script setup>
import { computed } from 'vue';
import store from "../store"

const meals = computed(()=> store.state.meals)

</script>