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
        <li>
          <RouterLink to="/slots">Slots</RouterLink>
        </li>
        <li>
          <RouterLink to="/prop-drilling"
            >Prop drilling with prodive/inject</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/composable">Composable/custom hooks</RouterLink>
        </li>
        <li>
          <RouterLink to="/custom-directive">Custom Directive</RouterLink>
        </li>
        <li>
          <RouterLink to="/custom-plugin">Custom Plugin</RouterLink>
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
  min-height: 64px;
  display: flex;
  align-items: center;
  padding: 1rem;
}
nav ul {
  list-style-type: none;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

nav ul li a {
  text-decoration: none;
  color: white;
}

nav ul li a::after {
  content: '|';
  padding-left: 1rem;
  text-decoration: none;
  color: white;
}

.router-container {
  /* height: calc(100vh - 64px); */
  background-color: whitesmoke;
}
</style>
