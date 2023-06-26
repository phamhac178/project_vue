<template>
    <pre>{{ meals }}</pre>
</template>
<script setup>
import { computed } from 'vue';
import store from "../"

const meals = computed(()=>store.this.state.meals)

</script>