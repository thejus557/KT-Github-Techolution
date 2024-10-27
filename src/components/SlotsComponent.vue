<template>
  <div class="container">
    <h2>Slots Example</h2>
    <ChildSlotComponent>
      <template #header>
        <h3>Header Slot</h3>
      </template>
      <p>Default Slot</p>
      <template #footer>
        <h3>Footer Slot</h3>
      </template>
    </ChildSlotComponent>
  </div>
</template>

<script setup lang="ts">
import ChildSlotComponent from './SlotsComponents/SlotChildComponent.vue'
</script>
