<template>
    <pre>{{ meals }}</pre>
</template>
<script setup>
import { computed } from 'vue';

const meals = computed(()=>store.this.state.meals)

</script>