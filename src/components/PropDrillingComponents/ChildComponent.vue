<template>
  <div class="bordered-container">
    <h3>Child Component - {{ counter }}</h3>
  </div>
</template>
<script setup lang="ts">
import { inject } from 'vue'

const counter = inject('counter')
</script>
