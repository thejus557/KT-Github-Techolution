<template>
  <ul v-if="todos.length">
    <li v-for="todo in todos" :key="todo">
      <span>{{ todo }}</span>
      <span><button @click="deleteTodo(todo)">delete</button></span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  todos: string[]
}>()

const emit = defineEmits(['delete-todo'])

const { todos } = props

const deleteTodo = (todo: string) => {
  emit('delete-todo', todo)
}
</script>
