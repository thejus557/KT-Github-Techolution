<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <ul>
        <!-- <li><RouterLink to="/">Home</RouterLink></li> -->
        <li><RouterLink to="/interpolation">Interpolation</RouterLink></li>
        <li><RouterLink to="/state">State</RouterLink></li>
        <li><RouterLink to="/binding">Binding</RouterLink></li>
        <li><RouterLink to="/conditional">Conditional</RouterLink></li>
        <li><RouterLink to="/loops">Loops</RouterLink></li>
        <li><RouterLink to="/event-handling">Event Handling</RouterLink></li>
        <li><RouterLink to="/v-model">v-model</RouterLink></li>
        <li><RouterLink to="/life-cycle">Life Cycle</RouterLink></li>
        <li><RouterLink to="/template-ref">Template Ref</RouterLink></li>
        <li>
          <RouterLink to="/basics-component">Basics of Components</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <div class="router-container">
    <RouterView />
  </div>
</template>

<style scoped>
* {
  font-family: monospace;
  font-size: 1rem;
  margin: 0;
}
nav {
  background-color: dodgerblue;
  height: 64px;
  display: flex;
  align-items: center;
}
nav ul {
  list-style-type: none;
  display: flex;
  gap: 2rem;
}

nav ul li a {
  text-decoration: none;
  color: white;
}

.router-container {
  height: calc(100vh - 64px);
  background-color: whitesmoke;
}
</style>
