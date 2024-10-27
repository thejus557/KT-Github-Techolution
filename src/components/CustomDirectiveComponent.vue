<template>
  <button
    v-highlight="i"
    v-for="i in ['success', 'error', 'on-going']"
    :key="i"
  >
    {{ i }}
  </button>
</template>
<script setup lang="ts"></script>
