<template>
  <h1>Life Cycle Example</h1>

  <button @click="value++">Increment</button>
  <p>Value: {{ value }}</p>
</template>
<script setup lang="ts">
import {
  onBeforeMount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  onBeforeUnmount,
  ref,
} from 'vue'

const value = ref(0)

onBeforeMount(() => {
  console.log('Component is about to mount')
})

onMounted(() => {
  console.log('Component mounted')
})

onBeforeUpdate(() => {
  console.log('Component is about to update')
})

onUpdated(() => {
  console.log('Component updated')
})

onBeforeUnmount(() => {
  console.log('Component is about to unmount')
})

onUnmounted(() => {
  console.log('Component unmounted')
})
</script>
