<template>
  <div class="container">
    <h2>Event Handling Example</h2>

    <p>Inline: {{ counter }}</p>

    <button @click="counter++">Increment</button>

    <br />
    <p>Users:</p>

    <ul>
      <li v-for="user in users" :key="user">
        {{ user }}
        <!-- Method event handling with parameters -->
        <button @click="removeUser(user)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const counter = ref(0)

// Reactive is used to store reactive data of data types like objects.

const users = reactive<string[]>([
  'surya teja',
  'Yash Agarwal',
  'Ankit Jangir',
  'Sabith pocker',
])

// Method event handling with parameters
const removeUser = (user: string) => {
  const index = users.indexOf(user)
  if (index > -1) {
    users.splice(index, 1)
  }
}
</script>
