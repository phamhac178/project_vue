<template>
    <div class="flex flex-col p-8 ">
        <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="search for Means"/>
        <div class="flex justify-center gap-2 mt-2">
            <router-link :to="{name: 'byLetter', params:{letter}}" v-for="letter  of letters" :key="letter">
                {{ letter }}
            </router-link>
        </div>
    </div>
</template>
<script setup>
import { computed,onMounted } from 'vue';
import store from "../store"
import axiosClient from '../axiosClient'

const letters ='ABCDEFGHIKJLMNOPQRSTUVWXYZ'.split("");
const intedients

onMounted(async ()=>{
    const response = await axiosClient.get('/list.php?i=list')
    console.log(response)
})
</script>