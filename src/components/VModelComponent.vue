<template>
  <div class="container">
    <h2>v-model Example</h2>
    <input type="text" v-model="userName" /> - user model: {{ userName }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const userName = ref('')
</script>
