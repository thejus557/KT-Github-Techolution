<template>
  <div class="container">
    <h2>Conditional Rendering Example</h2>

    <p>
      Counter (red for even numbers):
      <strong :class="{ highlight: counter % 2 === 0 }">{{ counter }}</strong>
    </p>

    <div v-if="counter > 0">
      <p>if cond - Counter is greater than 0</p>
    </div>
    <div v-else-if="counter < 0">
      <p>else if cond - 2.Counter is less than zero</p>
    </div>
    <div v-else>
      <p>else cond - Counter is equal to 0</p>
    </div>

    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>

  <br />
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Ref is used to store reactive data of data types like numbers, strings, booleans
const counter = ref(0)

const increment = () => {
  counter.value++
}

const decrement = () => {
  counter.value--
}
</script>

<style>
.highlight {
  font-weight: bold;
  color: red;
}

.new-user {
  color: green;
}
</style>
