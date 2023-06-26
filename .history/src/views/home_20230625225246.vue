<template>
    <pre>{{ meals }}</pre>
</template>
<script setup>
import { computed } from 'vue';
import { storeKey } from 'vuex';

const meals = computed(()=>storeKey.this.state.meals)

</script>