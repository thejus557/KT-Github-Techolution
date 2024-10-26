<template>
  <div class="container">
    <h2>Loops Example</h2>
    <br />
    <p>Users:</p>

    <ul>
      <li v-for="user in users" :key="user">{{ user }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// Reactive is used to store reactive data of data types like objects.

const users = reactive<string[]>([
  'surya teja',
  'Yash Agarwal',
  'Ankit Jangir',
  'Sabith pocker',
])
</script>
