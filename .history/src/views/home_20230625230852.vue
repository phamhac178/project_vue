<template>
    <pre>{{ means }}</pre>
</template>
<script setup>
import { computed } from 'vue';
import { storeKey } from 'vuex';

const means = computed(()=>storeKey.this.state.means)

</script>