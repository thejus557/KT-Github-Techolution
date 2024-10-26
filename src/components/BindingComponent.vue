<template>
  <div class="container">
    <h2>Bindings Example</h2>

    <p>
      Counter (red for even numbers):
      <strong v-bind:class="{ highlight: counter % 2 === 0 }">{{
        counter
      }}</strong>
    </p>

    <p>
      Computed the Counter Value By Five whenever there is a change in counter
      value (red if the value is greater than 20):
      <strong
        :style="{ color: computedCounterValueByFive > 20 ? 'red' : 'black' }"
        >{{ computedCounterValueByFive }}</strong
      >
    </p>

    <p>
      Watching the counter value, based on the value change updating the watched
      value (updating the id property):
      <strong :id="'watched-' + watchedValue">{{ watchedValue }}</strong>
    </p>

    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>

  <br />
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

// Ref is used to store reactive data of data types like numbers, strings, booleans
const counter = ref(0)

const watchedValue = ref(0)

const computedCounterValueByFive = computed(() => counter.value * 5)

watch(counter, (newValue, oldValue) => {
  watchedValue.value = newValue * 10
  console.log('Counter value changed from', oldValue, 'to', newValue)
})

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
