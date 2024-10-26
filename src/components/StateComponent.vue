<template>
  <div class="container">
    <h2>Ref State Example</h2>

    <p>
      Counter: <strong>{{ counter }}</strong>
    </p>

    <p>
      Computed the Counter Value By Five when ever there is a change in counter
      value: <strong>{{ computedCounterValueByFive }}</strong>
    </p>

    <p>
      Watching the counter value, based on the value change updating the watched
      value: <strong>{{ watchedValue }}</strong>
    </p>

    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>

  <br />

  <div class="container">
    <h2>Reactive State Example</h2>
    <button @click="addUser">addUser</button>

    <p>Users:</p>

    <ul>
      <li v-for="user in users" :key="user">{{ user }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'

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

// Reactive is used to store reactive data of data types like objects.

const users = reactive<string[]>(['surya teja'])

const addUser = () => {
  const user = prompt('Enter user name')
  if (user) {
    users.push(user)
  }
}
</script>
