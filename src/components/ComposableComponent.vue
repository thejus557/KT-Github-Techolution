<template>
  <div>{{ data }}</div>
</template>

<script setup lang="ts">
import { useFetch } from './composables/useFetch'

const data = useFetch('https://jsonplaceholder.typicode.com/posts')
</script>
