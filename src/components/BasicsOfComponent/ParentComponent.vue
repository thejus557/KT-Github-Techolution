<template>
  <input type="text" v-model="todo" />
  <button @click="addTodo(todo)">Add Todo</button>
  <ChildComponent v-bind:todos="todos" @delete-todo="deleteTodo" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

const todo = ref('')
const todos = ref<string[]>([])

const addTodo = (value: string) => {
  todos.value.push(value)
  todo.value = ''
}

// const deleteTodo = (value: string) => {
//   todos.value = todos.value.filter(todo => todo !== value)
//   console.log('todos', todos.value)
// }

const deleteTodo = (value: string) => {
  const index = todos.value.indexOf(value)
  if (index > -1) {
    todos.value.splice(index, 1)
  }
  console.log('todos', todos.value)
}
</script>
