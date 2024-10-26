<template>
  <div class="container">
    <h2>Template Ref Example</h2>
    <input ref="my-input" type="text" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue'

const userName = useTemplateRef('my-input')

onMounted(() => {
  if (userName?.value) {
    console.log('ref', userName)
    userName.value.focus()
    userName.value.value = 'Hello, World!'
  }
})
</script>
