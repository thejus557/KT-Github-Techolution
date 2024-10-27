<template>
  <div class="bordered-container">
    <h2>Grand Parent Component</h2>
    <button @click="counter++">counter - {{ counter }}</button>
    <ParentComponent />
  </div>
</template>
<script setup lang="ts">
import ParentComponent from './ParentComponent.vue'
import { provide, ref } from 'vue'
const counter = ref(0)

provide('counter', counter)
</script>
